/// <reference types="cypress" />

describe("Alerts on page", () => {

    beforeEach(() => {
        cy.clearCookies()
        cy.visit("https://kane-taxi.web.app/login");
    });
  
    it("Document upload persist on reload (KTT17)", () => {
        cy.get('input[name="email"]').type(
            "kanedriver04@mailinator.com"
            );
        cy.get('input[name="password"]').type("asdf1234");
        cy.contains(" Iniciar sesión ").click();
        cy.wait(5000);   
        cy.get('.title-default > :nth-child(1)').click();
        cy.wait(15000);   
        cy.get(':nth-child(2) > .ng-untouched > .native-input').clear().type("Fernanda");
        cy.get(':nth-child(3) > .ng-untouched > .native-input').clear().type("Mata Mora");
        cy.reload();
        cy.wait(15000);
        cy.get(':nth-child(2) > .ng-untouched > .native-input').should("have.value", "Fernanda");
        cy.get(':nth-child(3) > .ng-untouched > .native-input').should("have.value", "Mata Mora");
        cy.wait(5000);   
        cy.get('.ion-align-items-center > :nth-child(1) > .ion-color').click();
    });

});
