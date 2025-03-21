import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

// Scenario: invalid username "abc"
// *****************************************
Given('The viewport size is 1920×1080', () => {
  cy.viewport(1920, 1080);
  });

  Given('The viewport size is 1366×768', () => {
  cy.viewport(1366, 768);
  });

  Given('The viewport size is 1536×864', () => {
  cy.viewport(1536, 864);
  });

  Given('The viewport size is 1280×720', () => {
  cy.viewport(1280, 720);
  });

  Given('The viewport size is 360×800', () => {
  cy.viewport(360, 800);
  });

  Given('The viewport size is 390×844', () => {
  cy.viewport(390, 844);
  });

  Given('The viewport size is 393×873', () => {
  cy.viewport(393, 873);
  });

  Given('The viewport size is 412×915', () => {
  cy.viewport(412, 915);
  });

  Given('The viewport size is 768×1024', () => {
  cy.viewport(768, 1024);
  });

  Given('The viewport size is 1280×800', () => {
  cy.viewport(1280, 800);
  });

  Given('The viewport size is 800×1280', () => {
  cy.viewport(800, 1280);
  });

  Given('The viewport size is 820×1180', () => {
  cy.viewport(820, 1180);
  });




When('The user enters "abc" in the username field', () => {
  cy.get('#username').type("abc");
});

Then('The username validation message should display "⚠️ The username must between 4 and 10 characters long."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '⚠️ The username must between 4 and 10 characters long.');
});