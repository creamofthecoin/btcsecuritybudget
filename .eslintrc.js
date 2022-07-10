module.exports = {
    extends: ["next/core-web-vitals"],
    plugins: ["unused-imports", "import"],
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "unused-imports/no-unused-imports": "warn",
      "import/no-unused-modules": [1, { unusedExports: true }],
      "no-unused-vars": "warn",
      "no-undef": "off",
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/jsx-no-duplicate-props": "warn",
      "react/no-children-prop": "warn",
      "no-constant-condition": "warn",
      "react/no-unescaped-entities": "off"
    },
  };