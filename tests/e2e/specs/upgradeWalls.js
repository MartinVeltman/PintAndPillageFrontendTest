before(() => {
    cy.loginAndRegister();
    cy.navigateThroughTutorial();
    cy.buildHouse();
});

describe('Upgrade Walls Flow', () => {
    it('should upgrade a wall and check resources', () => {
        cy.url().should('include', '/');

        cy.get(':nth-child(1) > .clickableTile').click({multiple: true, force: true}); //click on the wall
        cy.get('.buildingListItemContainer > button').click(); //click on the upgrade button
        cy.get('.innerBuildingTimeModal').should('exist'); //check if the modal is displayed

        cy.get(':nth-child(2) > .resourceDetails > p').should('contain', '191'); //check if the iron is 492
        cy.get(':nth-child(1) > .resourceDetails > p').should('contain', '189');
        cy.get(':nth-child(3) > .resourceDetails > p').should('contain', '399');

        cy.wait(12000);

        cy.get('.gameLogsButtonBlink').click(); //click on the game logs button
        cy.get(':nth-child(2) > .logText').should('contain', 'Finished building Wall'); //check if the log is displayed
        cy.get('.loginButton').click({ force: true }); //click on the game logs button to close it

    })
})
