context('Can search for jobs using "What" and "Where"', () => {
    let intialJobCount = 0;
    let afterSearchingJobCount = 0;

    beforeEach(() => {
        cy.visit('https://reed.co.uk/jobs');

        cy.get('.page-title .count').as('totalJobCount');
    });

    const setJobCountBeforeSearchCriteriaApplied = () => {
        cy.get('@totalJobCount').then(($span) => {

            const countText = $span.text().replace(',', '');
            intialJobCount = Number(countText);

            expect(intialJobCount).to.be.greaterThan(205);
        });
    };

    const afterApplyingMoreSearchCriteria_thereShouldBeFewerResults = () => {
        cy.get('@totalJobCount').then(($span) => {
            const countText = $span.text().replace(',', '');
            afterSearchingJobCount = Number(countText);

            expect(afterSearchingJobCount).to.be.lessThan(intialJobCount);
        });
    };

    it('Keyword and location search', () => {
        setJobCountBeforeSearchCriteriaApplied();

        cy.get('#keywords')
            .type('admin')
            .should('have.value', 'admin');

        cy.get('#location')
            .type('Liverpool')
            .should('have.value', 'Liverpool');

        cy.contains('Search jobs')
            .click()
            .wait(800);

        afterApplyingMoreSearchCriteria_thereShouldBeFewerResults();
    });
});
