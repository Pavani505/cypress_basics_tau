it('create a new list a create a new card', () => {
    cy.visit('/board/1')
    cy.get('[data-cy="add-list-input"]')
      .type('new list{enter}')
    cy.contains('Add another card')
      .click()
    cy.get('[data-cy="new-card-input"]')
      .type('new card{enter}')
})

it.only('new test', () => {
  cy.visit('/')
  cy.get('[data-cy="star"]')
    .first()
    .click({force: true}) // force: true is a bypass when the element is only visible when the element is hover, but in cypress we dont have hover command
})