// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url and checks for #app', () => {
    cy.visit('/')
    cy.get('#app').should('exist')
  })
})
