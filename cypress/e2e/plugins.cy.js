// https://docs.cypress.io/plugins
// https://eyes.applitools.com/
// Example: installing applitools plugin => https://applitools.com/tutorials/quickstart/web/cypress/integrate
//   npm i -D @applitools/eyes-cypress
//   npx eyes-setup
// $env:APPLITOOLS_API_KEY="my_api_key" npx open cypress

beforeEach(() => {

  cy.eyesOpen({
    appName: 'Trello app'
  })
  
});


it('plugins', () => {

  cy.visit('/')

  cy.get('[data-cy="board-item"]')
    .should('be.visible')

  cy.eyesCheckWindow()

});

afterEach(() => {
  cy.eyesClose()
});