/// <reference types= "Cypress">

import loc from '../../support/search/locators'

describe('Ferramenta de pesquisa no Blog do Agi', () => {

    context('Dado que acesso o Blog do Agi', () => {
        beforeEach(() => {
            cy.viewport(1060, 768)
            cy.visit(Cypress.env('base_url'))
        })

        context('E clico no ícone de lupa', () => {
            beforeEach(() => {
                cy.get(loc.SEARCH.ICON).click()
            })

            context('Quando aguardo o componente de pesquisa', () => {
                
                beforeEach(() => {
                    cy.wait(1000)
                })

                it('Então o componente de pesquisa aparece na tela', () => {
                    cy.get(loc.SEARCH.ELEMENT).should('have.css', 'display', 'block')
                })
            })

            context('Quando informo o texto "Valores" no campo de texto', () => {
                beforeEach(() => {
                    cy.get(loc.SEARCH.INPUT).type("Valores")
                })

                context('E clico no botão PESQUISAR', () => {
                    beforeEach(() => {
                        cy.get(loc.SEARCH.BUTTON).click()
                    })

                    it('Então sou direcionado a tela com o resultado da minha pesquisa', () => {
                        cy.url().should('be.equal', `${Cypress.env('base_url')}/?s=Valores`)
                        cy.get(loc.RESULT.TITLE).should('contain', 'Resultados da busca por: Valores')
                    })
                })
            })
        })
    })
})