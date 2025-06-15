import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

  // Scenario: axe-core testing is performed
 
	When('the axe-core testing is performed', () => {
    cy.injectAxe();
  });

  Then('the axe-core testing should pass without any violations', () => {
    cy.checkA11y(null,{ runOnly: { type: 'tag', values: ['wcag2a','wcag2aa', /*'best-practice'*/]}},(violations) => {
      if (violations.length !== 0) {
        console.error(`${violations.length} accessibility violations found`);
        cy.task('log', `${violations.length} accessibility violations found`);
        violations.forEach((violation) => {
          console.log(`${violation.id}: ${violation.description}`);
          cy.task('log', `${violation.id}: ${violation.description}`);
        });
        // This will cause the test to fail if there are any violations
        throw new Error(`${violations.length} accessibility violations detected`);
      }
    })
  });

    
  