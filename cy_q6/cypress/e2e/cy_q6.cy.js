describe('scenario quete 6', () => {

    
 
    before(function () {
        return cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                cy.wrap(inbox.id).as('inboxId')
                cy.wrap(inbox.emailAddress).as('emailAddress')
            })
    });

    it('changer mdp', () => {
        
    cy.visit('https://preprod.backmarket.fr/fr-fr');
    cy.get('.mb-6 > .body-2-bold').click();
    cy.get('[class="w-5 h-5 md:w-6 md:h-6"]').click();
      
  
})
})