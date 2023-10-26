before(() => {
    //call command LoginAndRegister
    cy.loginAndRegister();
    cy.navigateThroughTutorial();
});

describe('Upgrade Buildings Flow', () => {
    it('should upgrade buildings', () => {
        cy.get('.buildingCard').should('exist')
    })
})
