import { When } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: invalid username "parentalité"

When('The user enters "parentalité" in the username field', () => {
  cy.get('#username')
  .should('be.visible')
  .clear()
  .type("parentalité");
});

