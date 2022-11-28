/// <reference types="cypress" />

describe("login service", () => {
  beforeEach(() => {
    cy.visit("https://kane-taxi.web.app/login");
  });

  it("user can edit previously sent documents (KTT11)", () => {
    cy.get('input[name="email"]').type("kanedriver06@mailinator.com");
    cy.get('input[name="password"]').type("asdf1234");

    cy.contains(" Iniciar sesión ").click();

    cy.wait(10000);

    cy.get("ion-title ion-button").first().click();

    cy.wait(30000);

    cy.get('input[name="ion-input-2"]').type("Edith");

    cy.contains("Siguiente").click();

    cy.wait(1000);

    cy.contains("Siguiente").click();

    cy.wait(1000);

    cy.contains("Enviar").click();

    cy.get(".alert-button-group").contains("button", "Enviar").click();

    cy.wait(40000);

    cy.contains(" ¡Documentos enviados! ").should("be.visible");

    cy.wait(2000);
  });
});
