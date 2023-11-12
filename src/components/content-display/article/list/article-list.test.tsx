import { render, screen } from "@testing-library/react";
import { ArticleList, ArticleListProps } from "./article-list";
import { Articles } from "../mock/Articles.mock";

const props: ArticleListProps = {
	data: Articles,
	variant: "expanded",
};

describe("Article List", () => {
	it("should render article list", () => {
		render(<ArticleList {...props} />);
		const articleList = screen.getByTestId("article-list");
		expect(articleList).toBeInTheDocument();
	});

	it("should render expected number of items", () => {
		const expectedLength = Articles.items.length;
		render(<ArticleList {...props} />);
		const articleListItems = screen.getAllByTestId("article-list-item");
		expect(articleListItems.length).toBe(expectedLength);
	});

	// do the test though!
	// it("should render article list of compact items", () => {
	// 	render(<ArticleList {...props} variant="compact" />);
	// 	const articleList = screen.getByTestId("article-list");
	// 	expect(articleList).toBeInTheDocument();
	// });

	describe("snaps", () => {
		it("should match snapshot for article list", () => {
			render(<ArticleList {...props} />);
			const articleListItem = screen.getByTestId("article-list");
			expect(articleListItem).toMatchSnapshot();
		});

		it("should match snapshot for article list of compact items", () => {
			render(<ArticleList {...props} variant="compact" />);
			const articleListItem = screen.getByTestId("article-list");
			expect(articleListItem).toMatchSnapshot();
		});
	});
});
