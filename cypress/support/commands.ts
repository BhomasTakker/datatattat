/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

//Need to 'add' these in an auth commands file?
//this could get very big
Cypress.Commands.add("login", (email: string, password: string) => {
	cy.visit("/auth/signin");

	cy.get("input[name='email']").type(email);
	cy.get("input[name='password']").type(password);

	cy.get("button[type='submit']").click();
});

Cypress.Commands.add("signup", (email: string, password: string) => {
	cy.visit("/auth/signup");

	cy.get("input[name='email']").type(email);
	cy.get("input[name='password']").type(password);
	cy.get("input[name='confirm']").type(password);

	cy.get("button[type='submit']").click();
});

Cypress.Commands.add("delete", (email: string, password: string) => {
	cy.login(email, password);

	//we actually need to close this notification
	//or make sure we can add multiple
	//or a new notification removes the existing one...
	cy.get("button[title=Close]").click();

	//open user menu and click delete account
	cy.get("button[aria-label=user]").click();
	cy.contains("Delete Account").click();

	// cy.visit("/auth/delete-account");

	//these are all the same could create a command for this?
	cy.get("input[name='email']").type(email);
	cy.get("input[name='password']").type(password);
	cy.get("input[name='confirm']").type(password);

	cy.get("button[type='submit']").click();
});

export {};
