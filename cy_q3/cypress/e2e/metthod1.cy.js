describe('Authentication tests', () => {
    beforeEach(() => {
        cy.fixture('userData').as('userProfile')
    })

    it('Login with user from Data Source', () => {
        cy.get('@userProfile').then( user => {
            cy.get('#usernameField').type(user.username).should('have.class','ng-valid')
            cy.get('#emailField').type(user.email).should('have.class','ng-valid')
        })
    })
})
