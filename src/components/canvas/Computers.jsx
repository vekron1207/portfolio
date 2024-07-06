import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import { useSpring, animated } from '@react-spring/three';
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotationY, setRotationY] = useState(0);

  // Spring animation for hover effect
  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  // Use frame hook to rotate the model along its Y axis
  useFrame(() => {
    const newRotationY = rotationY + 0.002; // Adjust the speed of rotation here
    setRotationY(newRotationY);
    if (meshRef.current) {
      meshRef.current.rotation.y = newRotationY;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <hemisphereLight intensity={3.15} groundColor="blue" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={9} />
      <primitive
        object={computer.scene}
        scale={0.7}
        position={[0, -1.5, 0]} // Centered position
        rotation={[0, 0, 0]} // Start with no rotation
      />
    </animated.mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
