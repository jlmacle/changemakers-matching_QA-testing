import { When } from '@badeball/cypress-cucumber-preprocessor';

  // Scenario: valid username "Valid_123"
 
	When('the user enters "Valid_123" in the username field', () => {
    cy.typeInUsername("Valid_123");
  });

  