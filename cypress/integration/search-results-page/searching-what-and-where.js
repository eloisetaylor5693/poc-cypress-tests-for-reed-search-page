describe.only('Can search for jobs using "What" and "Where" on the search results page', () => {
    beforeEach(() => {
        cy.visit('/jobs');

        cy.get('.page-title .count').as('totalJobCount');
    });

    let getJobCount = () => {
        return cy.get('@totalJobCount').then(($span) => {
            const countText = $span.text().replace(',', '');
            return Number(countText);
        });
    };

    it('Keyword and location search', () => {
        let initialJobCount = 0;
        let afterSearchingJobCount = 0;

        getJobCount()
            .then(count => {
                initialJobCount = count;

                expect(initialJobCount).to.be.greaterThan(0);
            });

        cy.get('#keywords')
            .type('admin')
            .should('have.value', 'admin');

        cy.get('#location')
            .type('Liverpool')
            .should('have.value', 'Liverpool');

        cy.searchJobsButton()
            .click()
            .wait(1200)
            .then(() => {
                getJobCount()
                    .then(count => {
                        afterSearchingJobCount = count;

                        expect(afterSearchingJobCount).to.be.greaterThan(0);
                        expect(afterSearchingJobCount).to.be.at.most(initialJobCount);
                        expect(afterSearchingJobCount).to.be.lessThan(initialJobCount);
                    });
            });
    });
});
