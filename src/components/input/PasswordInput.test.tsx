import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { testErrorMsg } from "../../../mockData/auth/constants";

//okaythis works

import { PasswordInput } from "./PasswordInput";

describe("EmailInput", () => {
	test("Renders email ", () => {
		render(<PasswordInput />);
		const passwordInput = screen.getByText(/auth:password/i);
		expect(passwordInput).toBeInTheDocument();
	});

	test("Renders email with given label ", () => {
		render(<PasswordInput label="Test Label" />);
		const passwordInput = screen.getByText(/test label/i);
		expect(passwordInput).toBeInTheDocument();
	});

	test("Renders given error message with error name provided ", () => {
		render(<PasswordInput label="Test Label" name="testError" />);
		const passwordInput = screen.getByText(testErrorMsg);
		expect(passwordInput).toBeInTheDocument();
	});
});
