describe('Registration and Login Flow', () => {
    let randomEmail;
    let randomUsername;


    before(() => {
        const random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        randomEmail = random + 'test@example.com';
        randomUsername = random + 'testUser';
    });

    it('should register a new user', () => {
        // Navigate to the registration page
        cy.visit('/register');

        // Fill out the registration form
        cy.get('input[placeholder="Username"]').type(randomUsername);
        cy.get('input[placeholder="Email"]').type(randomEmail);
        cy.get('input[placeholder="Password"]').type('Test@1234');
        cy.get('input[placeholder="Repeat password"]').type('Test@1234');

        // Click the Register button
        cy.get('button.submitButton').click();

        // Validate successful registration
        cy.contains('Account successfully created, please login');
        cy.url().should('include', '/login');
    });

    it('should login the new user', () => {
        // Navigate to the login page
        cy.visit('/login');

        // Fill out the login form
        cy.get('input[placeholder="Username"]').type(randomEmail);
        cy.get('input[placeholder="Password"]').type('Test@1234');

        // Click the Login button
        cy.get('button.submitButton').click();

        cy.url().should('include', '/');

    });
});
