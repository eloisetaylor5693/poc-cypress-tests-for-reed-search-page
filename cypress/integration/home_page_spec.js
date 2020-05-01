describe('Visiting the homepage', () => {

    context('Has all sections it should', () => {

        before(() => {
            cy.visit('https://reed.co.uk');
        });

        it('Has Coronavirus Banner', () => {
            cy.contains('Added today');
            cy.contains('Find out more');
        });
    
        it('Has "Trending jobs"', () => {
            cy.contains('Trening jobs');
        });
    
        it('Has "Browse local jobs"', () => {
            cy.contains('Browse local jobs');
        });
    
        it('Has "Choose your sector"', () => {
            cy.contains('Choose your sector');
            //browse-by-sector
        });
    });

    context('Can search for jobs using "What" and "Where"', () => {
        
        beforeEach(() => {
            cy.visit('https://reed.co.uk');
        });
    
        it('Keyword and location search', () => {
            cy.get('#main-keywords')
                .type('admin')
                .should('have.value', 'admin');
    
            cy.get('#main-location')
                .type('Liverpool')
                .should('have.value', 'Liverpool');

            cy.get('#homepageSearchButton')
                .click()

            cy.url().should('include', '/jobs/admin-jobs-in-liverpool')
        });
    });

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
});