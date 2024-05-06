# cypress_basics_tau

1 - Be sure you have node installed, you can check by running the command 'node -v'

2 - After having node installed you can run 'npm init -y'   (the -y stands for saying yes to everything while installing)

3 - Run 'npm install cypress'

4 - To Open the cypress application run 'npx cypress open' in this project we will be using E2E platform in cypress app

5 - Pick the browser you intend to run the tests

6 - Start the local project we will be using in this training running 'npm start' you should run in a terminal and the directory should be the trelloapp folder

# -------------------------Examples on how to find an element---------------------------------------
Examples CSS selector:
  # select first element
  cy.get('[data-cy=board-item]')
    .first()
  
  # select last element
  cy.get('[data-cy=board-item]')
    .last()

  # select element based on index number
  cy.get('[data-cy=board-item]')
    .eq(1)

  # contains text and contains text in a class
  cy.contains('new board')
  cy.contains('.board', 'new board')

  # for class '.'
  cy.get('.board')
  # for id '#'
  cy.get('#board-1')
  # for other attributes '[theAttribute=value]'
  cy.get('[data-cy=board-item]')