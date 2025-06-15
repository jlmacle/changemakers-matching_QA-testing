import { When } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: invalid username "parentalité"

When('the user enters "parentalité" in the username field', () => {
  cy.typeInUsername("parentalité");
});

