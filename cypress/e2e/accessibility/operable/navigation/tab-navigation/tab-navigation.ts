import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
});

//Focus on the "new account or login" button
Given('I focus on the element with id {string}', (elementId: string) => {
  cy.get(elementId).focus();
});

//1. Tabbing toward title
When('I press the Tab key to navigate to the next focusable element', () => {
  cy.tab();
});

// Checking the title
Then('I should find that the focused element has the id {string}', (expectedId: string) => {
  cy.focused().should('have.attr', 'id', expectedId);
});

//2. Tabbing toward testimonies
When('I press the Tab key a 2nd time', () => {
  cy.tab();
});

// Checking the testimonies id
Then('I should arrive at a first element with the id {string}', (expectedId: string) => {
  cy.focused().should('have.attr', 'id', expectedId);
});

//3. Tabbing toward about link
When('I press the Tab key a 3rd time', () => {
  cy.tab();
});

// Checking the about link id
Then('I should arrive at a second element with the id {string}', (expectedId: string) => {
  cy.focused().should('have.attr', 'id', expectedId);
});

//4. Tabbing toward about privacy link
When('I press the Tab key a 4th time', () => {
  cy.tab();
});

// Checking the about privacy link id
Then('I should arrive at a third element with the id {string}', (expectedId: string) => {
  cy.focused().should('have.attr', 'id', expectedId);
});
