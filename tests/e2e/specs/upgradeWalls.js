before(() => {
    cy.loginAndRegister();
    cy.navigateThroughTutorial();
    cy.buildHouse();
});

describe('Upgrade Walls Flow', () => {
    it('should upgrade a wall and check resources and logs', () => {
        cy.url().should('include', '/');

        cy.get(':nth-child(1) > .clickableTile').click({multiple: true, force: true});
        cy.get('.buildingListItemContainer > button').click();
        cy.get('.innerBuildingTimeModal').should('exist');

        cy.get(':nth-child(2) > .resourceDetails > p').should('contain', '191');
        cy.get(':nth-child(1) > .resourceDetails > p').should('contain', '189');
        cy.get(':nth-child(3) > .resourceDetails > p').should('contain', '399');

        cy.wait(12000);

        cy.get('.gameLogsButtonBlink').click({multiple: true, force: true});
        cy.get(':nth-child(2) > .logText').should('contain', 'Finished building Wall');
        cy.get('.loginButton').click({ force: true });

    })
})
