import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { testErrorMsg } from "../../../mockData/auth/constants";
import { EmailInputWithControl } from "./EmailInput";

describe("EmailInput", () => {
	test("Renders email ", () => {
		render(<EmailInputWithControl label="email" name="email" />);
		const emailInput = screen.getByText(/email/i);
		expect(emailInput).toBeInTheDocument();
	});

	test("Renders email with given label ", () => {
		render(<EmailInputWithControl label="Test Label" name="email" />);
		const emailInput = screen.getByText(/test label/i);
		expect(emailInput).toBeInTheDocument();
	});

	test("Renders given error message with error name provided ", () => {
		render(<EmailInputWithControl label="Test Label" name="testError" />);
		const emailInput = screen.getByText(testErrorMsg);
		expect(emailInput).toBeInTheDocument();
	});
});
