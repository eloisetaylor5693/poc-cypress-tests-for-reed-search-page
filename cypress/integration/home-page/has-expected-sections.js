context('Has all sections it should', () => {

    before(() => {
        cy.visit('https://reed.co.uk');
    });

    it('Has Coronavirus Banner', () => {
        cy.contains('Added today');
        cy.contains('Find out more');
    });

    it('Has "Trending jobs"', () => {
        cy.contains('Trending jobs');
    });

    it('Has "Browse local jobs"', () => {
        cy.contains('Browse local jobs');
    });

    it('Has "Choose your sector"', () => {
        cy.contains('Choose your sector');
        //browse-by-sector
    });
});