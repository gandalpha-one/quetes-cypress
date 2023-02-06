const { defineConfig } = require("cypress");

// npm install --save mailslurp-client
const { MailSlurp } = require("mailslurp-client");
const mailslurp = new MailSlurp({ apiKey: "61303fafce7376770a92941192e6319a4a4ff52bfe7da61aa41e2ac5d3d5380c" });
// fetch emails
const emails = await mailslurp.inboxController.getEmails({ inboxId: "55357b67-9909-4bad-b613-89d424f40d33" });






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

module.exports = defineConfig({
  projectId: '1607e22f-9a2f-4de1-951c-1940f6a7aa67',
})