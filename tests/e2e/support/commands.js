
Cypress.Commands.add('loginAndRegister', () => {
    const username = Math.random().toString(36).substring(2, 15);
    const email = username + '@example.com';
    const password = 'Test@1234';

    cy.visit('/register');
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('input[placeholder="Repeat password"]').type(password);
    cy.get('button.submitButton').click();

    cy.visit('/login');
    cy.get('input[placeholder="Username"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button.submitButton').click();


});
Cypress.Commands.add('navigateThroughTutorial', () => {
    cy.get('.tutorialBaseModal').should('exist');
    cy.get('button').contains('Continue').click();
    cy.get('button').contains('Lets do this!').click();

    cy.get('#modalButton').click();
});

Cypress.Commands.add('buildHouse', () => {
    cy.get(':nth-child(8) > .clickableTile').click({ force: true });
    cy.get(':nth-child(2) > :nth-child(1) > .buildingListItemContainer > button').click();
    cy.wait(12000);
});

