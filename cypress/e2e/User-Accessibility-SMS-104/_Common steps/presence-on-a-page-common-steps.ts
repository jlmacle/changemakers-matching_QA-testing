import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
  cy.get('body').should('be.visible');
});

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
  cy.get('body').should('be.visible');
});
