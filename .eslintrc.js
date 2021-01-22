{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier", "react-hooks"],
  "parser": "babel-eslint",
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": [
      "error",
      {
        "ignore": ["router", "params", "location"]
      }
    ],
    "react/no-did-update-set-state": "off",
    "react/destructuring-assignment": "off",
    "react/no-access-state-in-setstate": "off",
    "react/button-has-type": "off",
    "react/jsx-tag-spacing": "off",
    "operator-linebreak": "off",
    "no-else-return": "off",
    "no-console": [
      "warn",
      {
        "allow": ["error"]
      }
    ]
  },
  "env": {
    "browser": true
  },
  "globals": {
    "it": true,
    "expect": true,
    "describe": true,
    "beforeEach": true,
    "afterEach": true
  }
}
