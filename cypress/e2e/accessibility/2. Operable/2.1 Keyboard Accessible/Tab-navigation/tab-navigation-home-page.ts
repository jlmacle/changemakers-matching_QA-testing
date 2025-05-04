import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: Tab Navigation on the Home Page
// *****************************************

Given('I am on the home page', () => {
  cy.visit('/www/index.html');
  cy.get('body').should('be.visible');
});

//1. Tabbing toward the "Skip To New Content" feature (Tabbing step externalized)
Then('I should arrive at the "Skip To New Content" feature', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-test', "skipToMainContent");
});

//2. Tabbing toward "new account or login" button (Tabbing step externalized)
Then('I should arrive at the "New account - Login" button', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-test', "newAccountOrLogin-button");
});

//3. Tabbing toward title (Tabbing step and focused element testing externalized)

//4. Tabbing toward testimonies (Tabbing step externalized)
Then('I should arrive at the testimonies', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-test', "testimonies");
});

//5. Tabbing toward about link (Tabbing step and focused element testing externalized)

//6. Tabbing toward about privacy link (Tabbing step and focused element testing externalized)
