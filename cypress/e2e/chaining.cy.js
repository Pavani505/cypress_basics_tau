import { cardsLoadRandomly, cardsLoadSlowly } from '../../evilcode' 

it('chaining and retrying', () => {
  cy.visit('/board/1')
  cy.contains('[data-cy="card"]', 'May 07 2024')
  cy.get('[data-cy="card-list"]')
    .eq(1)
    .contains('[data-cy="card"]', 'May 07 2024')
})

it.only('chaining and retrying 2', {defaultCommandTimeout: 8000}, () => {
  cardsLoadSlowly(1000)
  cardsLoadRandomly(4000)
  cy.visit('/board/1')

  cy.get('[data-cy="card"]') // query
    .last() // query
    .should('contain.text', 'drug 2') // assertion
    .click() // actions

  cy.get('[data-cy="card-detail-title"]')
    .should('have.value', 'drug 2')
  // cy.get('[data-cy="card"]', { timeout: 6000 })
})