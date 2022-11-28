/// <reference types="cypress" />

describe("Alerts on page", () => {
    beforeEach(() => {
      cy.visit("https://kane-taxi.web.app/login");
    });
  
    it("has alert on approval dialog (KTT12)", () => {
        cy.get('input[name="email"]').type(
            "pruebastaxi@mailinator.com"
            );
        cy.get('input[name="password"]').type("asdf1234");
        cy.contains(" Iniciar sesión ").click();
        cy.wait(5000);
        cy.get("ion-toast").should("exist").shadow().contains(".toast-message", "La administración del sistema debe verificar sus datos. Este proceso puede tarde un tiempo.");
        
    });
});
