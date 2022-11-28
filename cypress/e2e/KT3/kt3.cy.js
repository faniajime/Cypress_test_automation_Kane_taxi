/// <reference types="cypress" />

describe("create account service", () => {
  beforeEach(() => {
    cy.visit("https://kane-taxi.web.app/signup");
  });

  it("has a email, password and password confirmation fields respectively (KTT33)", () => {
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('input[name="cpassword"]').should("be.visible");

    cy.contains("Registrarse").should("be.visible");
  });

  it("has a back to login page button (KTT34)", () => {
    cy.contains("Volver").should("be.visible");
  });

  it("create account (KTT6)", () => {
    cy.get('input[name="email"]').type("kanedriverautotest16@mailinator.com");
    cy.get('input[name="password"]').type("asdf1234");
    cy.get('input[name="cpassword"]').type("asdf1234");

    cy.contains("Registrarse").click();

    cy.wait(2000);

    cy.get("ion-toast")
      .should("exist")
      .shadow()
      .contains(
        ".toast-message",
        "Se ha enviado un correo electrónico de verificación a la dirección: kanedriverautotest16@mailinator.com"
      );

    cy.contains("Iniciar Sesión").should("be.visible");

    cy.wait(2000);
  });
});
