import { render, screen } from "@testing-library/react";
import { ArticleList } from "./article-list";
import { Articles } from "./article-list.mock.data";
import { LOREM_1_S } from "mockData/text/lorem";

const props = {
	data: Articles,
	title: "Test Title",
	description: LOREM_1_S,
	// component,
	useAvatar: true,
	showDescription: true,
	showPublished: true,
	showAuthor: true,
	showPublisher: true,
};

const { title } = props;

describe("ArticleListItem", () => {
	it("should render article list item", () => {
		render(<ArticleList {...props} />);
		const articleListItem = screen.getByTestId("article-list");
		expect(articleListItem).toBeInTheDocument();
	});

	it("should render expected title", () => {
		render(<ArticleList {...props} />);
		const articleListItem = screen.getByText(title);
		expect(articleListItem).toBeInTheDocument();
	});

	it("should render expected number of items", () => {
		const expectedLength = Articles.items.length;
		render(<ArticleList {...props} />);
		const articleListItems = screen.getAllByTestId("article-list-item");
		expect(articleListItems.length).toBe(expectedLength);
	});

	describe("snaps", () => {
		it("should match snapshot for article list item", () => {
			render(<ArticleList {...props} />);
			const articleListItem = screen.getByTestId("article-list");
			expect(articleListItem).toMatchSnapshot();
		});
	});
});
