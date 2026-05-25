/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro de usuários', () => {
    beforeEach(() => {
        cy.visit('register.html');
    });

    it.only('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome= faker.person.fullName();
        let email = faker.internet.email();
        let telefone = faker.phone.number('119########');
        let senha = faker.internet.password({ length: 8, symbols: true });
        let confirmacaoSenha = senha;

        cy.get('#name').type(nome);
        cy.get('#email').type(email);
        cy.get('#phone').type(telefone);
        cy.get('#password').type(senha);
        cy.get('#confirm-password').type(confirmacaoSenha);
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();

        //Resultado esperado: Redirecionamento para a página de dashboard e validar que o nome do usuário esteja presente
        cy.url().should('include', 'dashboard');
        cy.get('#user-name').should('contain', nome);
    });

    it('Deve fazer cadastro com sucesso, usando Fução JS', () => {
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