describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://kane-taxi.web.app/')

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

    //Test last trip
    cy.get('.title-default > :nth-child(2)').should('be.visible')

  })
})