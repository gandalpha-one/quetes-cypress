describe('Authentication tests', () => {

it('Statistiques du premier Samedi de Janvier 2023', () => {
    cy.countriesCoronaSearch('07-01-2023').then(response => {
        cy.log(JSON.stringify(response))
        expect(response.body[0].date).eq('2023-01-07')
        expect(response.body[0].rea).greaterThan(1)
    })
})
it('Statistiques du premier Dimanche de Janvier 2023 ', () => {
    cy.countriesCoronaSearch('14-01-2023').then(response => {
        cy.log(JSON.stringify(response))
        expect(response.body[0].date).eq('2023-01-14')
    })
})
})