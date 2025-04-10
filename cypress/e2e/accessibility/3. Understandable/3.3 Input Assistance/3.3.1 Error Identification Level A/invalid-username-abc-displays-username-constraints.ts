import { When } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: invalid username "abc"

When('The user enters "abc" in the username field', () => {
  cy.get('#username')
  .should('be.visible')
  .clear()
  .type("abc");
});
