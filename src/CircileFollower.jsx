// src/CircleFollower.jsx
import React, { useState, useEffect } from 'react';

const CircleFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const circleStyle = {
        position: 'fixed',
        top: position.y - 15, // Center the circle
        left: position.x - 15, // Center the circle
        width: '50px', // Circle size
        height: '50px', // Circle size
        borderRadius: '50%',
        border: '2px solid lightblue', // Light blue border
        boxShadow: '0 0 10px lightblue', // Light blue glow
        backgroundColor: 'transparent', // Transparent background
        pointerEvents: 'none', // So it doesn't interfere with mouse events
        zIndex: 9999, // Make sure it stays on top of other elements
    };

    return <div style={circleStyle}></div>;
};

export default CircleFollower;
