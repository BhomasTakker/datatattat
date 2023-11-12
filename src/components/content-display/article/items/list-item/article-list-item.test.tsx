import { render, screen } from "@testing-library/react";
import { ArticleListItem, ArticleListItemProps } from "./aticle-list-item";
import { Article1 } from "../../mock/Articles.mock";

const props: ArticleListItemProps = {
	item: Article1,
	direction: "column",
	avatarSize: "md",
	titleMaxLines: 1,
	descriptionMaxLines: 3,
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
