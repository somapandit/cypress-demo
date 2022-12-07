const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //baseUrl: "",
    "include": [
      "./node_modules/cypress",
      "cypress/**/*/js"
    ],
    env: {
      MY_ENV_VAR2: "hello2"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
