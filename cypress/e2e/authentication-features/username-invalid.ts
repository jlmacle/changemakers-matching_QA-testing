import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

// Username with .
When('the user enters "Invalid_user_name..123" in the username field', () => {
  cy.get('#username').type('invaliduser.123');
});

Then('the username validation message should display "⚠️ Invalid character present."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '⚠️ Invalid character present.');
});

// Too long user name
When('the user enters "Too_long_user_name_123456789" in the username field', () => {
  cy.get('#username').type('Too_long_user_name_123456789');
});

Then('the username validation message should display "⚠️ The username is too long."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '⚠️ The username is too long.');
});

