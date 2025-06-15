import { When } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: invalid username "01234567890"

When('the user enters "01234567890" in the username field', () => {
  cy.typeInUsername("01234567890");
});

