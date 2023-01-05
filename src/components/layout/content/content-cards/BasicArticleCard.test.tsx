import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BasicArticleCard from "./BasicArticleCard";

test("renders BasicArticleCard ", () => {
	render(<BasicArticleCard height={300} />);
	const titleElement = screen.getByText(/Article Heading/);
	expect(titleElement).toBeInTheDocument();
});
