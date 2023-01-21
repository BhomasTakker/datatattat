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
		cy.visit("/auth/signin");

		cy.get("input[name='email']").type("thomas@thomas.com", { force: true });
		cy.get("input[name='password']").type("thomas123");

		cy.get("button[type='submit']").click();

		cy.url().should("include", "profile");

		cy.get("h1").contains("User Profile Page");
	});
});

export {};
