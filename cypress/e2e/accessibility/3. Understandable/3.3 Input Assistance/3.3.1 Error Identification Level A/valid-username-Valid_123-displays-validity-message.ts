import { When } from '@badeball/cypress-cucumber-preprocessor';

  // Scenario: valid username "Valid_123"
 
	When('the user enters "Valid_123" in the username field', () => {
    cy.get('#username')
    .should('be.visible')
    .clear()
    .type('Valid_123');
  });

  