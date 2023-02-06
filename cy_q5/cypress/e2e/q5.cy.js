describe('scenario quete 2', () => {
 
    it('inscription réussi', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr/register');
      cy.get('.mt-7 > .flex > ._3jgXaWY4 > .MkLAMntR').click();
      cy.get("#firstName").type("mouloud");
      cy.get("#lastName").type("vador");
      cy.get("#signup-email").type('mvador@yopmail.com');
      cy.get("#signup-password").type("Catanana666");
      cy.contains("Enchantés").click();
    })
    it('inscription échouée', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr/register');
      cy.get('.mt-7 > .flex > ._3jgXaWY4 > .MkLAMntR').click();
      cy.get("#firstName").type("mouloud");
      cy.get("#lastName").type("vador");
      cy.get("#signup-email").type('mvador@yopmail.com');
      cy.get("#signup-password").type("catanana");
      cy.contains("Enchantés").click();
    })
    it('authentification reussi', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr/register');
      cy.get('.mt-7 > .flex > ._3jgXaWY4 > .MkLAMntR').click();
      cy.get('#signin-email').type('mvador@yopmail.com');
      cy.get('#signin-password').type('Catanana666');
      cy.get('[data-test="signin-component"] > form > .mt-7 > ._1xMx-RYw > .MkLAMntR > ._2GvJDBxS').click();
    })
  })