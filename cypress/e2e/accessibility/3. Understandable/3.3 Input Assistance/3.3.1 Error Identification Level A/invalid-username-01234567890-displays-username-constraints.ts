import { When } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: invalid username "01234567890"

When('the user enters "01234567890" in the username field', () => {
  cy.get('#username')
  .should('be.visible')
  .clear()
  .type("01234567890");
});

