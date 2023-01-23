/// <reference types="cypress" />

describe("Home Page", () => {
	it("Should load homepage", () => {
		cy.visit("/");
	});
	it("Should navigate to sign in ", () => {
		cy.visit("/");

		cy.get(".Login").click();

		cy.url().should("include", "signin");

		cy.get("h1").contains("Sign In");
	});
});

export {};
