import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
});

When('the user clicks on the "New account and Login" zone', () => {
  cy.get('#newAccountOrLogin-button').click();
});

Then('the user opens the modal window', () => {
  //then element with id "userTypeOptions-modal-content" is visible 
  cy.get('#userTypeOptions-modal-content').should('be.visible');
});

When('the user clicks on the "Project representative" link', () => {
  cy.get('#link-to-proj-rep-page').click();
});

Then('the user arrives on the representative "New account creation" page', () => {
  cy.get('#newAccount-projRep-container').should('be.visible');
});