it('test passes', () => {
  cy.visit('/')
})

it('test fails', () => {
  cy.visit('/')
  expect(true).to.be.false
})