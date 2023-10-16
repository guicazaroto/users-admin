describe('Users', () => {
  it('should create a new user', () => {
    cy.visit('/#/users/create')

    cy.get('#name').type('John Doe')
    cy.get('#email').type('test@test.com')
    cy.get('#password').type('123456')
    cy.get('button').contains(/save/i).click()
    cy.contains(/element created/i)
  })

  it('should show the crated user', () => {
    cy.visit('/#/users')

    cy.contains(/john doe/i)
    cy.contains(/test@test.com/i)
  })

  it('should edit the user', () => {
    cy.visit('/#/users')

    cy.get('.MuiTableBody-root > :nth-child(1) > .column-name').click()
    cy.get('#name').clear().type('John Doe 2')
    cy.get('button').contains(/save/i).click()

    cy.contains(/element updated/i)
  })

  it('should delete the user', () => {
    cy.visit('/#/users')

    cy.get('.MuiTableBody-root > :nth-child(1) > .column-name').click()
    cy.get('button').contains(/delete/i).click()

    cy.contains(/element deleted/i)
    cy.contains(/john doe 2/i).should('not.exist')
  })
})