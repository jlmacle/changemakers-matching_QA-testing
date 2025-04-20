import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('The username validation message should display "⚠️ The username must between 4 and 10 characters long."', () => {
    cy.get('#newAccount-projRep-errorInUsername')
    .should('be.visible')
    .should('contain', '⚠️ The username must between 4 and 10 characters long.');  
  }); 

  Then('The username validation message should display', (docString: string) => {
    cy.get('#newAccount-projRep-errorInUsername')
    .should('be.visible')
    .should('contain', "⚠️ Invalid character present.")
    .should('contain', "The username can only contain lowercase letters (without accents), numbers and underscores.")
  }); 

  Then('The username validation message should display "✅ The username is valid."', () => {
    cy.get('#newAccount-projRep-errorInUsername')
    .should('be.visible')
    .should('contain', '✅ The username is valid.');
  });