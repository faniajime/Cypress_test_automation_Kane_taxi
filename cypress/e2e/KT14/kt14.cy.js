/// <reference types="cypress" />

describe("Alerts on page", () => {
    beforeEach(() => {
      cy.visit("https://kane-taxi.web.app/login");
    });
  
    it("has alert on approval dialog (KTT12)", () => {
        cy.get('input[name="email"]').type(
            "kanedriver04@mailinator.com"
            );
        cy.get('input[name="password"]').type("asdf1234");
        cy.contains(" Iniciar sesión ").click();
        cy.wait(5000);
        cy.contains("Su cuenta está desactivada, actualice sus documentos.").should("exist");        
        
    });
});
