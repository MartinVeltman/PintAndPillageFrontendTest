describe('Registration and Login Flow', () => {
    let randomEmail;
    let randomUsername;


    before(() => {
        const random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        randomEmail = random + 'test@example.com';
        randomUsername = random + 'testUser';
    });

    it('should register a new user', () => {
        cy.visit('/register');

        cy.get('input[placeholder="Username"]').type(randomUsername);
        cy.get('input[placeholder="Email"]').type(randomEmail);
        cy.get('input[placeholder="Password"]').type('Test@1234');
        cy.get('input[placeholder="Repeat password"]').type('Test@1234');

        cy.get('button.submitButton').click();

        cy.contains('Account successfully created, please login');
        cy.url().should('include', '/login');
    });

    it('should login the new user', () => {
        cy.visit('/login');

        cy.get('input[placeholder="Username"]').type(randomEmail);
        cy.get('input[placeholder="Password"]').type('Test@1234');

        cy.get('button.submitButton').click();

        cy.url().should('include', '/');

    });

    it('should not register with an invalid password', () => {
        cy.visit('/register');
        cy.get('input[placeholder="Username"]').type(randomUsername);
        cy.get('input[placeholder="Email"]').type(randomEmail);
        cy.get('input[placeholder="Password"]').type('invalid');
        cy.get('input[placeholder="Repeat password"]').type('invalid');
        cy.get('button.submitButton').click();
        //.v-toast with text "Password must be at least 8 characters long"
        cy.get('.v-toast').should('exist');
        cy.contains('Password must have at least 8 characters');
    });

    it('should not login with invalid credentials', () => {
        cy.visit('/login');
        cy.get('input[placeholder="Username"]').type('wrongUsername');
        cy.get('input[placeholder="Password"]').type('wrongPassword');
        cy.get('button.submitButton').click();
        cy.contains('Something went wrong');
    });

    it('should not register with an existing username', () => {
        cy.visit('/register');
        cy.get('input[placeholder="Username"]').type(randomUsername);
        cy.get('input[placeholder="Email"]').type(randomEmail);
        cy.get('input[placeholder="Password"]').type('Test@1234');
        cy.get('input[placeholder="Repeat password"]').type('Test@1234');
        cy.get('button.submitButton').click();
        cy.contains('Something went wrong');
        cy.get('.serverDown').should('exist');
    });

});
