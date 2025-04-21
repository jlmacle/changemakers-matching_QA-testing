import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

// Scenario: Tab Navigation on the Representative Page
// **************************************************

Given('I am on the representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
  cy.get('body').should('be.visible');
});

//1. Tabbing toward title (Tabbing step externalized)
Then('I should arrive at the page title', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-cy', "homePageTitle-link");
});

//2. Tabbing toward username field (Tabbing step externalized)
Then('I should arrive at the username field', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-cy', "username");
});

//3. Tabbing toward password field (Tabbing step externalized)
Then('I should arrive at the password field', () => {
  cy.focused()
  .should('be.visible')
  .should('have.attr', 'data-cy', "password");
});

//4. Tabbing toward about link (Tabbing step externalized)

//5. Tabbing toward about privacy link (Tabbing step externalized)
