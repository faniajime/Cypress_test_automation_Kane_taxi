describe('user needs the history option', () => {
  it('user log in with valid credentials (KTT3)', () => {
    cy.visit('https://kane-taxi.web.app/')
    cy.clearLocalStorage()
    cy.wait(2000)

    //Test input email
    cy.get('[formcontrolname="email"] > .native-input').type('testtaxi@mailinator.com')
    
    cy.wait(2000)


    //Test password
    cy.get('.ng-pristine > .native-input').type('test123.')

    cy.wait(2000)


    //Login btn
    cy.get('.center > .ion-color').click()

    cy.wait(2000)

  })

  it('user trip history (KTT12)', () =>{
    //Test last trip
    cy.get('.title-default > :nth-child(2)').should('be.visible')
  })

  it('logout', () =>{
    cy.get(".log-out").click();
  })
})