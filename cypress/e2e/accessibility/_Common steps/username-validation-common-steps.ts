import { Then } from '@badeball/cypress-cucumber-preprocessor';

  Then('the username validation message should display "⚠️ The username must between 4 and 10 characters long."', () => {
    cy.assertErrorInUsername('⚠️ The username must between 4 and 10 characters long.');  
  });
  
  Then('the username validation message should display', (docString: string) => {
    cy.assertErrorInUsername("The username can only contain lowercase letters (without accents), numbers and underscores.");
  }); 

  Then('the username validation message should display "✅ The username is valid."', () => {
    cy.assertErrorInUsername('✅ The username is valid.');
  });