describe('Cypress Test', () => {
    it('example', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.main_url)

            cy.wait(3000)

            cy.log('Клик по чекбоксу')
            cy.get('#checkbox-category-122178970')
                .check()

            cy.wait(3000)

            cy.log('Ввод цены ДО')
            cy.get('.ec-filter__price-to > .form-control__text')
                .type(data.priceDO)
                .type('cypress {enter}')
            

        })
    })
});





