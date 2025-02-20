import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

// Username with .
When('the user enters {string} in the username field', (username) => {
  cy.get('#username').type(`${username}`);
});

Then('the username validation message should display {string}', (errorMessage) => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', `${errorMessage}`);
});

// Too long user name
When('the user enters {string}" in the username field', (username) => {
  cy.get('#username').type(`${username}`);
});

Then('the username validation message should {string}', (errorMessage) => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', `${errorMessage}`);
});

