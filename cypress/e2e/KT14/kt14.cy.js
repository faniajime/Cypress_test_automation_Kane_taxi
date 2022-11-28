/// <reference types="cypress" />

describe("Alerts on page", () => {
    beforeEach(() => {
      cy.visit("https://kane-taxi.web.app/login");
    });
  
    it("Has alert on expired files (KTT23)", () => {
        cy.get('input[name="email"]').type(
            "kanedriver04@mailinator.com"
            );
        cy.get('input[name="password"]').type("asdf1234");
        cy.contains(" Iniciar sesión ").click();
        cy.wait(5000);
        cy.contains("Su cuenta está desactivada, actualice sus documentos.").should("exist");        
        
    });

    it("Documents persist from a past sent try (KTT19)", () => {
        cy.get('.title-default > :nth-child(1)').click();
        cy.wait(15000);   
        cy.get(':nth-child(2) > .ng-untouched > .native-input').should("have.value", "Aylen");
        cy.get(':nth-child(3) > .ng-untouched > .native-input').should("have.value", "Rojas Garro");
        cy.get(':nth-child(4) > .ng-untouched > .native-input').should("have.value", "50644444444");
        cy.get('.swiper-slide-active > form.ng-untouched > .left > :nth-child(7) > .ng-untouched > .native-input').should("have.value", "4-4444-4444");     
        
    });

    it("Update documents shows in the title (KTT21)", () => {
        cy.get('.title-default > :nth-child(1)').click();
        cy.wait(15000);   
  
        cy.get('.can-go-back > .header-md > .toolbar-title-default > .md').should("have.text", "Actualizar"); 
        
    });
});
