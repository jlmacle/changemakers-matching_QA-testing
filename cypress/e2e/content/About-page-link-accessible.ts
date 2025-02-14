import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
});

When('the user clicks on the "About" link', () => {
  cy.get('#about-link').click();
});

Then('the user arrives to a page with the title "About us"', () => {
  cy.get('title').should('contain', 'About us');
});
