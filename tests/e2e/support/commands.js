// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
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

