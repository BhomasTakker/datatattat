import { render, screen } from "@testing-library/react";
import { ArticleList, ArticleListProps } from "./article-list";
import { LOREM_1_S } from "mockData/text/lorem";
import { ContentTitleVariants } from "../items/content-title/content-title";
import { DescriptionVariants } from "../items/description/description";
import { DetailsVariantType } from "../items/details/details";
import { Articles } from "../mock/Articles.mock";

const props: ArticleListProps = {
	data: Articles,
	// title: "Test Title",
	// description: LOREM_1_S,
	// component,
	useAvatar: true,
	showDescription: true,
	showPublished: true,
	showAuthor: true,
	showPublisher: true,
	///////////
	componentTitle: "Test Title",
	componentTitleVariant: "Primary" as ContentTitleVariants,
	componentDescription: LOREM_1_S,
	componentDescriptionVariant: "Primary" as DescriptionVariants,
	itemTitleVariant: "Primary" as ContentTitleVariants,
	itemTitleMaxLines: 0,
	itemDescriptionVariant: "Primary" as DescriptionVariants,
	itemDescriptionMaxLines: 0,
	itemDetailsVariant: "space-between" as DetailsVariantType,
};

const { componentTitle } = props;

describe("ArticleList", () => {
	it("should render article list item", () => {
		render(<ArticleList {...props} />);
		const articleListItem = screen.getByTestId("article-list");
		expect(articleListItem).toBeInTheDocument();
	});

	it("should render expected title", () => {
		render(<ArticleList {...props} />);
		const articleListItem = screen.getByText(componentTitle);
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
