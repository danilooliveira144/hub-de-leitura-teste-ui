/// <reference types="cypress" />

describe('Funcionalidade: Cadastro de usuários', () => {
    beforeEach(() => {
        cy.visit('register.html');
    });

    it('Deve fazer cadastro com sucesso', () => {
        let email = `danilo.oliveira${Date.now()}@example.com`;

        cy.get('#name').type("Danilo de Oliveira Marques");
        cy.get('#email').type(email);
        cy.get('#phone').type('11987654321');
        cy.get('#password').type('Teste@123');
        cy.get('#confirm-password').type('Teste@123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();

        //Resultado esperado: Redirecionamento para a página de dashboard
        cy.url().should('include', 'dashboard');
    });
});