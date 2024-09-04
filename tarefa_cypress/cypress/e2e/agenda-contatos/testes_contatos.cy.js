/// <reference types="cypress" />

describe('Testes para a Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar outro contato', () => {
        cy.get('input[type="text"]').type('Emerson Teixeira')
        cy.get('input[type="email"]').type('emersonteixeira@gmail.com')
        cy.get('input[type="tel"]').type('11954393351')
        cy.get('.adicionar').click()
        cy.screenshot('tela-adicao')
    })

    it('Deve alterar algum contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Gian da Silva Leite')
        cy.get('.alterar').click()
        cy.screenshot('tela-alteracao')
    })

    it('Deve remover o contato da Felice', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
        cy.screenshot('tela-remocao')
    })
})