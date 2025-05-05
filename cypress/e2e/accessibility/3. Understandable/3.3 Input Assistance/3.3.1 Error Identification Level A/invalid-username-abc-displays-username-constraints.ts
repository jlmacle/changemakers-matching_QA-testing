import { When } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: invalid username "abc"

When('the user enters "abc" in the username field', () => {
  cy.typeInUsername("abc");
});
