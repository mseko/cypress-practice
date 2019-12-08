describe('My First Test', function () {
    it('what_it_does', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.viewport(2311, 992)

        cy.visit('https://www.yahoo.co.jp/')
        cy.document().then((doc) => {
            cy.writeFile('./result/hoge1.html', doc.body.innerHTML)
        })

        cy.get('ul > .sc-bIqbHp:nth-child(1) > .sc-cZBZkQ > .sc-ecaExY > .sc-gbzWSY').click()
        cy.visit('https://news.yahoo.co.jp/pickup/6344755')
        cy.document().then((doc) => {
            cy.writeFile('./result/hoge2.html', doc.body.innerHTML)
        })

        cy.get('.tpcDetail > #tpcNews > .tpcNews_header > #link > .tpcNews_title').click()
        cy.visit('https://headlines.yahoo.co.jp/hl?a=20191208-00000055-jij-soci')
        cy.document().then((doc) => {
            cy.writeFile('./result/hoge3.html', doc.body.innerHTML)
        })

    })
})