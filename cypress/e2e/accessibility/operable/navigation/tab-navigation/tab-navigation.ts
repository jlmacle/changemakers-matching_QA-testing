import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


// Scenario: Tab Navigation on the Home Page
// *****************************************

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
});

//1. Tabbing toward the "Skip To New Content" feature
When('I press the Tab key to navigate to the next focusable element', () => {
  cy.tab();
});
Then('I should arrive at the "Skip To New Content" feature', () => {
  cy.focused().should('have.attr', 'id', "skipToMainContent");
});


//2. Tabbing toward "new account or login" button
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the "new account or login" button', () => {
  cy.focused().should('have.attr', 'id', "newAccountOrLogin-button");
});

//3. Tabbing toward title
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the page title - home page', () => {
  cy.focused().should('have.attr', 'id', "homePageTitle-link");
});

//4. Tabbing toward testimonies
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the testimonies', () => {
  cy.focused().should('have.attr', 'id', "testimonies");
});

//5. Tabbing toward about link
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the "About" link', () => {
  cy.focused().should('have.attr', 'id', "about-link");
});

//6. Tabbing toward about privacy link
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the "Privacy" link', () => {
  cy.focused().should('have.attr', 'id', "privacy-link");
});


// **************************************************
// **************************************************


// Scenario: Tab Navigation on the Representative Page
// **************************************************

Given('I am on the representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

//1. Tabbing toward title
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the page title - representative page', () => {
  cy.focused().should('have.attr', 'id', "homePageTitle-link");
});

//2. Tabbing toward username field
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the username field', () => {
  cy.focused().should('have.attr', 'id', "username");
});

//3. Tabbing toward password field
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the password field', () => {
  cy.focused().should('have.attr', 'id', "password");
});

//4. Tabbing toward about link
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the "About" link - representative page', () => {
  cy.focused().should('have.attr', 'id', "about-link");
});

//5. Tabbing toward about privacy link
// When I press the Tab key to navigate to the next focusable element
// already implemented
Then('I should arrive at the "Privacy" link - representative page', () => {
  cy.focused().should('have.attr', 'id', "privacy-link");
});