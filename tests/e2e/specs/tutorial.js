
before(() => {
    cy.loginAndRegister();
});
describe('Tutorial Flow', () => {
    it('should display and navigate through the tutorial modal after first login', () => {
        cy.url().should('include', '/');

        cy.get('.tutorialBaseModal').should('exist');

        cy.get('.tutorialTextDiv h1').should('contain', 'Elwrick Pintbreaker');
        cy.get('.tutorialTextDiv h2').should('contain', 'Hi there my fellow Viking!');

        cy.get('button').contains('Continue').click();

        cy.get('.tutorialTextDiv h2').should('contain', 'So here is where you come in.');

        cy.get('button').contains('Lets do this!').click();

        cy.get('.tutorialBaseModal').should('not.exist');
        cy.get('#modalButton').click();

    });
});
