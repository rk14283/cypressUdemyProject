const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //  baseUrl: "http://cypress/index.html",
  },
  //defaultCommandTimeout: 20000,
  defaultCommandTimeout: 5000,
});
