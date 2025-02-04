import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
});

//1. Tabbing toward "new account or login" button
When('a. I press the Tab key twice', () => {
  cy.tab();
  cy.tab();
});
Then('I should arrive at the "new account or login" button', () => {
  cy.focused().should('have.attr', 'id', "newAccountOrLogin-button");
});

//2. Tabbing toward title
When('b. I press the Tab key to navigate to the next focusable element', () => {
  cy.tab();
});
Then('I should arrive at the page title', () => {
  cy.focused().should('have.attr', 'id', "homePageTitle-link");
});

//3. Tabbing toward testimonies
When('c. I press the Tab key to navigate to the next focusable element', () => {
  cy.tab();
});
Then('I should arrive at the testimonies', () => {
  cy.focused().should('have.attr', 'id', "testimonies");
});

//4. Tabbing toward about link
When('d. I press the Tab key to navigate to the next focusable element', () => {
  cy.tab();
});
Then('I should arrive at the "About" link', () => {
  cy.focused().should('have.attr', 'id', "about-link");
});

//5. Tabbing toward about privacy link
When('e. I press the Tab key to navigate to the next focusable element', () => {
  cy.tab();
});
Then('I should arrive at the "Privacy" link', () => {
  cy.focused().should('have.attr', 'id', "privacy-link");
});

