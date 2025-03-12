import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

// Scenario: valid username "Valid_123" on viewport size is 1920×1080
// *****************************************
Given('The viewport size is 1920×1080', () => {
  cy.viewport(1920, 1080);
});

When('The user enters "Valid_123" in the username field', () => {
  cy.get('#username').type('Valid_123');
});

Then('The username validation message should display "✅ The username is valid."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '✅ The username is valid.');
});