// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('enterEmail', (email) => {
    cy.get('[data-test="email-input"]').type(email);
    });

Cypress.Commands.add('clickForgotPasswordButton', () => {
    cy.get('[data-test="forgot-password-button"]').click();
    });

Cypress.Commands.add('clickResetPasswordButton', () => {
    cy.get('[data-test="reset-password-button"]').click();
    });

    Cypress.Commands.add('getResetPasswordURL', (email) => {
        return mailslurp.waitForLatestEmail(email).then((email) => {
        const resetPasswordLink = email.body.match;
        return resetPasswordLink;
        });
        });