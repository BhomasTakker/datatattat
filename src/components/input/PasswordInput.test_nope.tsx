import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { testErrorMsg } from "../../../mockData/auth/constants";
import { PasswordInputWithControl } from "./PasswordInput";

describe("PasswordInput", () => {
	test("Renders password ", () => {
		render(<PasswordInputWithControl label="password" name="password" />);
		const passwordInput = screen.getByText(/password/i);
		expect(passwordInput).toBeInTheDocument();
	});

	test("Renders password with given label ", () => {
		render(<PasswordInputWithControl label="Test Label" name="password" />);
		const passwordInput = screen.getByText(/test label/i);
		expect(passwordInput).toBeInTheDocument();
	});

	test("Renders given error message with error name provided ", () => {
		render(<PasswordInputWithControl label="Test Label" name="testError" />);
		const passwordInput = screen.getByText(testErrorMsg);
		expect(passwordInput).toBeInTheDocument();
	});
});
