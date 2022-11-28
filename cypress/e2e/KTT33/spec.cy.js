describe('empty spec', () => {
  it('Probar pantalla principal "Buscando viaje"(KTT33)', () => {
    cy.visit('https://kane-taxi.web.app');
    cy.get('input[name="email"]').type("testtaxi@mailinator.com");
    cy.get('input[name="password"]').type("test123.");
    cy.contains("Iniciar sesión").click();
    cy.wait(1000);
    cy.contains("Buscando viaje")
  });

})