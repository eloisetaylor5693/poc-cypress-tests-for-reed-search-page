context('Homepage has useful sections for the jobseeker', () => {

    before(() => {
        cy.visit('https://reed.co.uk');
    });

    it('Has Coronavirus Banner', () => {
        cy.get('.banner-container')
            .contains('Added today');

        cy.get('.banner-container')
            .contains('Find out more');
    });

    it('Has "Trending jobs"', () => {
        cy.contains('Trending jobs');

        cy.get('.companies-promo li')
            .then(($listItem) => {
                expect($listItem.length).to.be.greaterThan(5);
            });
    });

    describe('Has "Browse local jobs"', () => {
        it('Has heading', () => {
            cy.contains('Browse local jobs');
        });

        it('Has promoted job locations', () => {
            cy.get('.browse-by-location .picture-block li')
                .should('have.length', 4);
        })

        it('Has major locations', () => {
            cy.get('.browse-by-location')
                .contains('Jobs in London');

            cy.get('.browse-by-location')
                .contains('Jobs in Manchester');
        });

        it('Has regions of the country', () => {
            cy.get('.browse-by-location')
                .contains('Jobs in Scotland');

            cy.get('.browse-by-location')
                .contains('Jobs in South East England');
        });

        it('Has "Browse all locations"', () => {
            cy.get('.browse-by-location')
                .contains('Browse all locations');
        });

        it('Has "International Jobs "', () => {
            cy.get('.browse-by-location')
                .contains('International Jobs');
        });
    });

    it('Has suggested companies', () => {
        cy.contains('leading companies');

        cy.get('.trending-promo a')
            .then(($listItem) => {
                expect($listItem.length).to.be.greaterThan(10);
            });
    });

    describe('Has "Choose your sector"', () => {

        it('Has heading', () => {
            cy.contains('Choose your sector');
        })

        it('Has promoted job sectors', () => {
            cy.get('.browse-by-sector .picture-block li')
                .should('have.length', 4);
        })

        it('Has list of sectors', () => {
            cy.get('.browse-by-sector .sector-list li')
                .then(($listItem) => {
                    expect($listItem.length).to.be.greaterThan(10);
                });
        })
    });
});