module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    semi: 0,
    ignorePureComponents: 0,
    'comma-dangle': 0
  },
  "env": {
    browser: true,
    mocha: true
  }
};