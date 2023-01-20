//need to go through and understand next testing
//I shouldn't have to add this but setup.ts appears to not be loading

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AuthInputs } from "./AuthInputs";

describe("Auth Inputs", () => {
	test("renders AuthInputs", () => {
		render(<AuthInputs />);
		const emailInput = screen.getByText(/auth:email/i);
		// screen.debug();
		expect(emailInput).toBeInTheDocument();
	});
	//go over find, query, get, I expected the find to work
	test("doesn't render confirmPassword by default", () => {
		render(<AuthInputs />);
		const confirm = screen.queryByText(/Auth:confirm-password/i);
		// const confirm = await screen.findByText(/Auth:confirm-password/i);
		expect(confirm).not.toBeInTheDocument();
	});

	test("renders confirmPassword by when confirmPassword prop passed ", () => {
		render(<AuthInputs confirmPassword />);
		const confirm = screen.queryByText(/Auth:confirm-password/i);
		// const confirm = await screen.findByText(/Auth:confirm-password/i);
		expect(confirm).toBeInTheDocument();
	});
});
