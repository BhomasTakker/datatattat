/// <reference types="cypress" />

describe("Home Page", () => {
	it("Should load homepage", () => {
		cy.visit("/");
	});
	it("Should navigate to sign in ", () => {
		cy.visit("/");

		cy.get("a[href*=signin]").click();

		cy.url().should("include", "signin");

		cy.get("h1").contains("Sign In");
	});
	it("Should sign in ", () => {
		//this is pretty swish
		cy.login("thomas@thomas.com", "thomas123");

		cy.url().should("include", "profile");

		cy.get("h1").contains("User Profile Page");
	});
});

export {};
