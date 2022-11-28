/// <reference types="cypress" />

describe("login service", () => {
  beforeEach(() => {
    cy.visit("https://kane-taxi.web.app/login");
  });

  it("has recover password button (KTT30)", () => {
    cy.contains("¿Olvidó su contraseña?").should("exist");
  });

  it("has create account button (KTT31)", () => {
    cy.contains(" Crear Cuenta ").should("exist");
  });

  it("has a email and password field respectively (KTT32)", () => {
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");

    cy.contains(" Iniciar sesión ").should("be.visible");
  });

  it("user log in with valid credentials (KTT3)", () => {
    cy.get('input[name="email"]').type(
      "kanedriverloginvalidtest@mailinator.com"
    );
    cy.get('input[name="password"]').type("asdf1234");

    cy.contains(" Iniciar sesión ").click();

    cy.wait(10000);

    cy.get("Iniciar Sesión").should("not.exist");

    cy.get(".log-out").click();

    cy.wait(2000);
  });

  it("user log in with valid invalid password (KTT4)", () => {
    cy.get('input[name="email"]').type(
      "kanedriverloginvalidtest@mailinator.com"
    );
    cy.get('input[name="password"]').type("12345678");

    cy.contains(" Iniciar sesión ").click();

    cy.wait(4000);

    cy.get("Iniciar Sesión").should("not.exist");
  });
});
