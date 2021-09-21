export default class ContatoScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/contato');
  }

  callModalForm() {
    this.cy.get('#button').click().invoke('show');

    return this;
  }

  fillContactForm({ name, email, message }) {
    // encontrar e preencher input Nome (erro, Text também com o name=nome dentro do TextField)
    this.cy.get('#formCadastro input[name="name"]').last().type(name);
    this.cy.get('#formCadastro input[name="email"]').last().type(email);
    this.cy.get('#formCadastro input[name="message"]').last().type(message);

    return this;
  }

  submitForm() {
    this.cy.get('#formCadastro button[type="submit"]').last().click();

    return this;
  }

  closeForm() {
    this.cy.get('#formCadastro button[type="button"]').last().click();

    return this;
  }
}
