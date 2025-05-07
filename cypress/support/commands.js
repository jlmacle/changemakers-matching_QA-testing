// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('typeInUsername', (value) => {
    return cy
    .get('[data-test="username"]')
    .should('be.visible')
    .clear()
    .type(value);
}
);

Cypress.Commands.add('assertErrorInUsername', (value) => {
    return cy
    .get('[data-test="newAccount-projRep-errorInUsername"]')
    .should('be.visible')
    .should('contain', value);
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })