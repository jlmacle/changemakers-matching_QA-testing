import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

When('the user enters "Valid_user_name_123" in the username field', () => {
  cy.get('#username').type('Valid_user_name_123');
});

Then('the username validation message should display "✅ The username is valid."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '✅ The username is valid.');
});

