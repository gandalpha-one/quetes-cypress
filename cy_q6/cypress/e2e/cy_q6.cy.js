/// <reference types="cypress-mailslurp" />

const { MailSlurp } = require("mailslurp-client");
const mailslurp = new MailSlurp({ apiKey: "61303fafce7376770a92941192e6319a4a4ff52bfe7da61aa41e2ac5d3d5380c" });
//const emails = await mailslurp.inboxController.getEmails({ inboxId: "55357b67-9909-4bad-b613-89d424f40d33" });


describe('scenario quete 6', () => {

    
    
 
    before(function () {
        cy.log("Wrap inbox before test")
        return cy.mailslurp()

            .then(inbox => {
                cy.log(`Inbox id ${inbox.id}`)
                cy.wrap(inbox.id).as('55357b67-9909-4bad-b613-89d424f40d33')
                cy.wrap(inbox.emailAddress).as('55357b67-9909-4bad-b613-89d424f40d33@mailslurp.com')
            })
    });

    it('changer mdp', () => {
        
        cy.intercept({
            url: 'https://preprod.backmarket.fr/bm/lost-password',
            method: 'POST'
          }).as('waitEmail')
    cy.visit('https://preprod.backmarket.fr/fr-fr');
    cy.get('.mb-6 > .body-2-bold').click();
    cy.get('[class="w-5 h-5 md:w-6 md:h-6"]').click();
    cy.get("#email").type("55357b67-9909-4bad-b613-89d424f40d33@mailslurp.com");
    cy.get('#submit-login').click();
    cy.get('#login-form > .mb-7').click();
    cy.get('[data-test="password-reset-submit-button"]').click();
    cy.wait('@waitEmail');
    cy.mailslurp()
    .then(mailslurp => mailslurp.waitForLatestEmail('55357b67-9909-4bad-b613-89d424f40d33', 30000, true))
    .then(email =>
    //expect(email.subject).to.contain("Nouveau mot de pass"))
    cy.document().invoke('write', email.body));
    cy.get('.t_fz15px').click();
    cy.get('#newPassword').type('59Mouloud');
    cy.get('#newPasswordConfirmation').type('59Mouloud');
    cy.get('[class="MkLAMntR"]').click();
    cy.get('#signin-email').type('55357b67-9909-4bad-b613-89d424f40d33@mailslurp.com');
    cy.get('#signin-password').type('59Mouloud');
    cy.get('[data-qa="signin-submit-button"]').click();
 })
})
