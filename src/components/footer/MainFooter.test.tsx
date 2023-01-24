import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MainFooter } from "@/components/footer/MainFooter";

test("renders Footer ", () => {
	render(<MainFooter />);
	const footer = screen.getByText(/footer/i);
	expect(footer).toBeInTheDocument();
});
