import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

// Scenario: invalid username "abc" on viewport size 1920×1080
// *****************************************
Given('The viewport size is 1920×1080', () => {
  cy.viewport(1920, 1080);
});

When('The user enters "abc" in the username field', () => {
  cy.get('#username').type("abc");
});

Then('The username validation message should display "⚠️ The username must between 4 and 10 characters long."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '⚠️ The username must between 4 and 10 characters long.');
});