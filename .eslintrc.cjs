module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    // Other rules...
    "react/prop-types": off, // Turn off prop-types validation if not needed
    "react/jsx-props-no-spreading": off, // Turn off spreading props warning if needed
    "react/forbid-component-props": off, // Turn off forbidding certain props in JSX
    // Add configurations for Three.js specific properties
    "react/forbid-prop-types": [
      "error",
      { forbid: ["intensity", "castShadow", "receiveShadow"] },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
