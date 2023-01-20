import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { testErrorMsg } from "../../../mockData/auth/constants";

import { EmailInput } from "./EmailInput";

describe("EmailInput", () => {
	test("Renders email ", () => {
		render(<EmailInput />);
		const emailInput = screen.getByText(/auth:email/i);
		expect(emailInput).toBeInTheDocument();
	});

	test("Renders email with given label ", () => {
		render(<EmailInput label="Test Label" />);
		const emailInput = screen.getByText(/test label/i);
		expect(emailInput).toBeInTheDocument();
	});

	test("Renders given error message with error name provided ", () => {
		render(<EmailInput label="Test Label" name="testError" />);
		const emailInput = screen.getByText(testErrorMsg);
		expect(emailInput).toBeInTheDocument();
	});
});
