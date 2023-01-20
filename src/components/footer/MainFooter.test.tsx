import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MainFooter } from "./MainFooter";

test("renders Footer ", () => {
	render(<MainFooter />);
	const footer = screen.getByText(/footer/i);
	expect(footer).toBeInTheDocument();
});
