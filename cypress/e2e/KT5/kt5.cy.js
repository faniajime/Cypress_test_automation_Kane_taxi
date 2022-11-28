/// <reference types="cypress" />

describe("Register information", () => {
  beforeEach(() => {
    cy.visit("https://kane-taxi.web.app/login");
  });

  it("has fields on register (KTT25)", () => {

    //Login
      cy.get('input[name="email"]').type(
          "pruebastaxiregister@mailinator.com"
          );
      cy.get('input[name="password"]').type("asdf1234");
      cy.contains(" Iniciar sesión ").click();
      cy.wait(5000);   
      
      cy.contains("Nombre").should("exist");
      cy.contains("Apellidos").should("exist");
      cy.contains("Número telefónico con área").should("exist");
      cy.contains("Imagen del rostro").should("exist");
      cy.contains("Imagen de hoja de delincuencia").should("exist");
      cy.contains("Cédula de identidad").should("exist");
      cy.contains("Vence cédula").should("exist");
      cy.contains("Imagen de la cédula").should("exist");
      cy.contains("Licencia de conducir").should("exist");
      cy.contains("Vence licencia").should("exist");
      cy.contains("Imagen de la licencia").should("exist");

  });
});
