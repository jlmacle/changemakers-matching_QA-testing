import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

When('the user enters "Invalid_user_name..123" in the username field', () => {
  cy.get('#username').type('invaliduser.123');
});

Then('the username validation message should display "⚠️ Invalid character present."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '⚠️ Invalid character present.');
});

