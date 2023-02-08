const { defineConfig } = require("cypress");

// npm install --save mailslurp-client







// cypress.config.js
module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "61303fafce7376770a92941192e6319a4a4ff52bfe7da61aa41e2ac5d3d5380c",
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});

