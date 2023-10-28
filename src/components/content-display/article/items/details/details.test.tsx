import { render, screen } from "@testing-library/react";
import { DetailsComponent } from "./details";
import { details1 } from "./details.mock.data";

describe("Details", () => {
	it("should render empty Details", () => {
		render(<DetailsComponent />);
		const detailsElement = screen.getByTestId("details");
		expect(detailsElement).toBeInTheDocument();
	});

	it("should render Details with published data", () => {
		render(<DetailsComponent details={details1} showPublished />);
		// should - mock Time and return whatever
		const detailsElement = screen.getByText(/published/i);
		expect(detailsElement).toBeInTheDocument();
	});

	it("should render Details with categories data", () => {
		render(<DetailsComponent details={details1} showCategories />);
		const detailsElement = screen.getByText(/category1, category2/i);
		expect(detailsElement).toBeInTheDocument();
	});

	it("should render Details with publishers data", () => {
		render(<DetailsComponent details={details1} showpublishers />);
		const detailsElement = screen.getByText("Publisher.com");
		expect(detailsElement).toBeInTheDocument();
	});

	it("should render Details with authors data", () => {
		render(<DetailsComponent details={details1} showAuthors />);
		const detailsElement = screen.getByText(
			"Author McAuther, Authorson, Author"
		);
		expect(detailsElement).toBeInTheDocument();
	});

	describe("snapshots", () => {
		it("should match snapshot for space-between variant", () => {
			render(
				<DetailsComponent
					details={details1}
					variant="space-between"
					showPublished
					showCategories
					showpublishers
					showAuthors
				/>
			);
			const detailsElement = screen.getByTestId("details");
			expect(detailsElement).toMatchSnapshot();
		});

		it("should match snapshot for stack variant", () => {
			render(
				<DetailsComponent
					details={details1}
					variant="stack"
					showPublished
					showCategories
					showpublishers
					showAuthors
				/>
			);
			const detailsElement = screen.getByTestId("details");
			expect(detailsElement).toMatchSnapshot();
		});
	});
});
