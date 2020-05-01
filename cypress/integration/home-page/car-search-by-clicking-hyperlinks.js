context('Can search for jobs using links on homepage', () => {

    beforeEach(() => {
        cy.visit('https://reed.co.uk');
    });

    it('Coronavirus banner', () => {
        cy.contains('Added today').click();

        cy.url().should('include', '/jobs/health-coronavirus-jobs');
    });

    it('Sector - Technology', () => {
        cy.contains('Technology').click();

        cy.url().should('include', '/jobs/it-jobs');
    });
});