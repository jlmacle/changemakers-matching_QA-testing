import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


// Scenario: Tab Navigation on the Home Page
// *****************************************

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
});

//1. Tabbing toward the "Skip To New Content" feature
When('I press the Tab key to navigate to the next focusable element - 1', () => {
  cy.tab();
});
Then('I should arrive at the "Skip To New Content" feature', () => {
  cy.focused().should('have.attr', 'id', "skipToMainContent");
});


//2. Tabbing toward "new account or login" button
When('I press the Tab key to navigate to the next focusable element - 2', () => {
  
  cy.tab();
});
Then('I should arrive at the "new account or login" button', () => {
  cy.focused().should('have.attr', 'id', "newAccountOrLogin-button");
});

//3. Tabbing toward title
When('I press the Tab key to navigate to the next focusable element - 3', () => {
  cy.tab();
});
Then('I should arrive at the page title', () => {
  cy.focused().should('have.attr', 'id', "homePageTitle-link");
});

//4. Tabbing toward testimonies
When('I press the Tab key to navigate to the next focusable element - 4', () => {
  cy.tab();
});
Then('I should arrive at the testimonies', () => {
  cy.focused().should('have.attr', 'id', "testimonies");
});

//5. Tabbing toward about link
When('I press the Tab key to navigate to the next focusable element - 5', () => {
  cy.tab();
});
Then('I should arrive at the "About" link', () => {
  cy.focused().should('have.attr', 'id', "about-link");
});

//6. Tabbing toward about privacy link
When('I press the Tab key to navigate to the next focusable element - 6', () => {
  cy.tab();
});
Then('I should arrive at the "Privacy" link', () => {
  cy.focused().should('have.attr', 'id', "privacy-link");
});

