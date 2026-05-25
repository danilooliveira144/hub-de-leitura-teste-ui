/// <reference types="cypress" />

describe('Funcionalidade: Contato', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get('#name').type('Danilo de Oliveira Marques');
    cy.get('#email').type('danilo.oliveira@example.com');
    cy.get('#subject').select('Sugestões');
    cy.get('#message').type('Mensagem de teste para o formulário de contato.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain','Contato enviado com sucesso!');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher o campo Nome', () => {
    cy.get('#email').type('danilo.oliveira@example.com');
    cy.get('#subject').select('Sugestões');
    cy.get('#message').type('Mensagem de teste para o formulário de contato.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain','Por favor, preencha o campo Nome.');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher o campo Email', () => {
    cy.get('#name').type('Danilo de Oliveira Marques');
    cy.get('#subject').select('Sugestões');
    cy.get('#message').type('Mensagem de teste para o formulário de contato.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain','Por favor, preencha o campo E-mail.');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher o campo Assunto', () => {
    cy.get('#name').type('Danilo de Oliveira Marques');
    cy.get('#email').type('danilo.oliveira@example.com');
    cy.get('#message').type('Mensagem de teste para o formulário de contato.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain','Por favor, selecione o Assunto.');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher o campo Mensagem', () => {
    cy.get('#name').type('Danilo de Oliveira Marques');
    cy.get('#email').type('danilo.oliveira@example.com');
    cy.get('#subject').select('Sugestões');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain','Por favor, escreva sua Mensagem.');
  });
});