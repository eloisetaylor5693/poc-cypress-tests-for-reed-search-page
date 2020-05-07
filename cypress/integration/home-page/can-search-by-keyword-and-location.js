context('Can search for jobs using "What" and "Where" on the homepage', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Keyword and location search', () => {
        cy.get('#main-keywords')
            .type('admin')
            .should('have.value', 'admin');

        cy.get('#main-location')
            .type('Liverpool')
            .should('have.value', 'Liverpool');

        cy.searchJobsButton().click();

        cy.url().should('include', '/jobs/admin-jobs-in-liverpool')
    });
});