// <reference types="cypress"/>
import ContatoScreenPageObject from '../../../src/components/screens/contato/ContatoScreen.pageObject';

describe('/contato', () => {
  describe('when click contact button and modal is open', () => {
    describe('fill forms fields correctly', () => {
      it('and submit the message', () => {
        // Pré teste
        cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
          .as('contact');

        const teste = {
          name: 'Teste',
          email: 'teste@email.com',
          message: 'Mensagem de teste',
        };

        // Cenário
        const contactScreen = new ContatoScreenPageObject(cy);
        contactScreen
          .callModalForm()
          .fillContactForm(teste)
          .submitForm();

        cy.url().should('include', '/contato');

        // contactScreen
        //   .closeForm();

        // .closeForm(); colocar uma logica para fechar o modal
      });
    });
  });
});
