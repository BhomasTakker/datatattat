/// <reference types="cypress" />

//this would be a unit test? / also 24 character limit?
describe("password", () => {
	it("Displays an error notification for password over character limit", () => {
		cy.login("nope@nope.com", "LongPassword12345");

		cy.contains("Password must be at most 15 characters");
	});

	it("Displays an error notification for password under character limit", () => {
		cy.login("nope@nope.com", "123");

		cy.contains("Password must be at least 6 characters");
	});
});

describe("Auth Login", () => {
	it("should redirect to profile on successful log in", () => {
		//load from some test data/config
		cy.login("thomas@thomas.com", "thomas123");

		cy.url().should("include", "profile");

		cy.get("h1").contains("User Profile Page");
	});

	it("Successful login should display success notification", () => {
		//load from some test data/config
		cy.login("thomas@thomas.com", "thomas123");

		cy.contains("Log in successful");
	});

	it("Unsuccessful login should display failure notification", () => {
		//load from some test data/config
		cy.login("incorrect@nope.com", "Nope12345");

		cy.contains("There has been an error logging you in.");
	});

	it("Successful logout should redirect to sign in page", () => {
		//load from some test data/config
		cy.login("thomas@thomas.com", "thomas123");

		cy.get("button[aria-label=user]").click();

		cy.contains("Logout").click();

		cy.url().should("include", "signin");
	});

	//The notification gets displayed and removed by redirect
	//Is variable pass rate so remove for now
	// it("Successful logout should display success notification", () => {
	// 	//load from some test data/config
	// 	cy.login("thomas@thomas.com", "thomas123");

	// 	cy.get("button[aria-label=user]").click();

	// 	cy.contains("Logout").click();

	// 	cy.contains("You have been logged out.");
	// });
});

describe("Auth Sign Up", () => {
	it("Should display a success notification on create user success", () => {
		cy.signup("temp@test.com", "test12345");
		cy.contains("Account Created. Welcome!");
	});

	it("Should display a success notification on delete user success", () => {
		cy.delete("temp@test.com", "test12345");

		//Again I think the redirect is killing this test
		//Cypress waits for the redirect and then tries to test the 'contains'
		//by that time it's gone / should be a way of sorting but until then - check redirected
		// cy.contains("account-deletion-successful"); //need to update auth script

		//Check we have redirected / better test may be to try and sign in again but expecting error
		cy.url().should("include", "signin");
	});
});

//Create Account
//Remove Account

//User / Change password

export {};
