//create a default e2e test
before(() => {
    //call command LoginAndRegister
    cy.loginAndRegister();
});
describe('Tutorial Flow', () => {
    it('should display and navigate through the tutorial modal after first login', () => {
        // Assuming you've already logged in and are at the '/' path
        cy.url().should('include', '/');

        // Check if the tutorial modal is displayed
        cy.get('.tutorialBaseModal').should('exist');

        // Check the content of the first page
        cy.get('.tutorialTextDiv h1').should('contain', 'Elwrick Pintbreaker');
        cy.get('.tutorialTextDiv h2').should('contain', 'Hi there my fellow Viking!');

        // Click the "Continue" button to go to the second page
        cy.get('button').contains('Continue').click();

        // Check the content of the second page
        cy.get('.tutorialTextDiv h2').should('contain', 'So here is where you come in.');

        // Click the "Let's do this!" button to close the modal and open the quests log
        cy.get('button').contains('Lets do this!').click();

        // Check if the tutorial modal is closed
        cy.get('.tutorialBaseModal').should('not.exist');
        cy.get('#modalButton').click();

    });
});
