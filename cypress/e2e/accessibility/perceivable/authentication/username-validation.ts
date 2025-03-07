import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

// Scenario: valid username
// *****************************************

When('The user enters "Valid_123" in the username field', () => {
  cy.get('#username').type('Valid_123');
});

Then('The username validation message should display "✅ The username is valid."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '✅ The username is valid.');
});

// Scenario: invalid username
// *****************************************

When('The user enters "abc" in the username field', () => {
  cy.get('#username').type("abc");
});

Then('The username validation message should display "⚠️ The username must between 4 and 10 characters long."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '⚠️ The username must between 4 and 10 characters long.');
});