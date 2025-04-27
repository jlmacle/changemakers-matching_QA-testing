import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Tabulation to next element
When('I press the Tab key to navigate to the next focusable element', () => {
    cy.tab();
  });

// Testing focused element: Page title link
Then('I should arrive at the page title', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-cy', "title-link");
});

// Testing focused element: "About" link
Then('I should arrive at the "About" link', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-cy', "about-link");
});

// Testing focused element: "Privacy" link
Then('I should arrive at the "Privacy" link', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-cy', "privacy-link");
});