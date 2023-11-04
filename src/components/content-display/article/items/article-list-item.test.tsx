import { render, screen } from "@testing-library/react";
import { ArticleListItem } from "./article-list-item";
import { Article1 } from "../mock/Articles.mock";

const props = {
	item: Article1,
	useAvatar: true,
	showDescription: true,
	showPublished: true,
	showAuthor: true,
	showPublisher: true,
};

describe("ArticleListItem", () => {
	it("should render article list item", () => {
		render(<ArticleListItem {...props} />);
		const articleListItem = screen.getByTestId("article-list-item");
		expect(articleListItem).toBeInTheDocument();
	});

	describe("snaps", () => {
		it("should match snapshot for article list item", () => {
			render(<ArticleListItem {...props} />);
			const articleListItem = screen.getByTestId("article-list-item");
			expect(articleListItem).toMatchSnapshot();
		});
	});
});
