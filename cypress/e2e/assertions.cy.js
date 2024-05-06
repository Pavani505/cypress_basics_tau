it('making assertions', () => {
  cy.visit('/board/1')
  cy.get('[data-cy="new-card"]')
    .click()
  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')
  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')
  cy.get('[data-cy="card"]')
    .should('have.length', 2)
  // .should('be.visible')
})

// it.('making assertions 2', () => {
//   cy.visit('/board/1')
//   cy.get('[data-cy="card-checkbox"]')
//     .check() // .uncheck() exists too
//   cy.get('[data-cy="card-checkbox"]')
//     .should('be.checked')
//   cy.get('[data-cy="due-date"]')
//     .should('have.class', 'completed')
// })

it.only('making assertions 3', () => {
  cy.visit('/board/1')
  cy.get('[data-cy="list-name"]')
    .should('have.value', 'groceries') // we should use have.value for input elements
  cy.get('[data-cy="card-text"]')
    .should('have.text', 'bread')
})