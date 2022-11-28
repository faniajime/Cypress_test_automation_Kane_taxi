describe('user needs the panic btn', () => {
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

    cy.wait(4000)

    //Test Panic Btn
    cy.get('.fab-horizontal-start > .ion-color').should('be.visible')


  })

  it('user finds panic btn (KTT37)', () =>{
    //Test Panic Btn
    cy.get('.fab-horizontal-start > .ion-color').should('be.visible')
  })

  it('logout', () =>{
    cy.get(".log-out").click();
  })
})