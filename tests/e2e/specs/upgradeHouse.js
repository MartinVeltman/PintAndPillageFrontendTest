before(() => {
    cy.loginAndRegister();
    cy.navigateThroughTutorial();
});

describe('Upgrade House Flow', () => {
    it('should upgrade a house and check resources, population and logs', () => {

        cy.url().should('include', '/');
        cy.get('.populationFrame > p').should('contain', '32'); //check if the population is 32

        cy.get(':nth-child(2) > .resourceDetails > p').should('contain', '500'); //check if the iron is 500
        cy.get(':nth-child(1) > .resourceDetails > p').should('contain', '500'); //check if the wood is 500

        cy.get(':nth-child(8) > .clickableTile').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .buildingListItemContainer > button').click();

        cy.get('.innerBuildingTimeModal').should('exist');

        cy.get(':nth-child(2) > .resourceDetails > p').should('contain', '492'); //checdk if the iron is 492
        cy.get(':nth-child(1) > .resourceDetails > p').should('contain', '490'); //check if the wood is 492
        //wait for the building to finish
        cy.wait(12000);
        cy.get('.populationFrame > p').should('contain', '53'); //cdheck if the popudlation is 53

        cy.get('.gameLogsButtonBlink').click(); //click on the game logs button
        cy.get('.logText').should('contain', 'Finished building House'); //check if the ldog is displayed
        cy.get('.loginButton').click({ force: true }); //click on the game logs button to cose it

        cy.get(':nth-child(8) > .clickableTile').click({ force: true });
        cy.get('.levelUpInfoContainer > :nth-child(4)').click();

        cy.get('.innerBuildingTimeModal').should('exist'); //check if the modal is displayed
        cy.get(':nth-child(2) > .resourceDetails > p').should('contain', '484');
        cy.get(':nth-child(1) > .resourceDetails > p').should('contain', '480');
        cy.wait(45000);
        cy.get('.populationFrame > p').should('contain', '81');

    });
});
