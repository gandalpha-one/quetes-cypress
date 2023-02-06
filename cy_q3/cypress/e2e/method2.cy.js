describe('Authentication tests', () => {

    let user = require('../fixtures/userData')
    
    it('Login with user from Data Source', () => {
        cy.get('#usernameField').type(user.username).should('have.class', 'ng-valid')
        cy.get('#emailField').type(user.email).should('have.class', 'ng-valid')
    })
})