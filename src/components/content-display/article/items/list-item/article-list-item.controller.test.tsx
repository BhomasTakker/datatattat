import { render, screen } from "@testing-library/react";
import { Article1 } from "../../mock/Articles.mock";
import {
	ArticleListItemController,
	ArticleListItemControllerProps,
} from "./article-list-item.controller";

const props: ArticleListItemControllerProps = {
	item: Article1,
	variant: "expanded",
};

describe("ArticleListItem Controller", () => {
	it("should render article list item via controller", () => {
		render(<ArticleListItemController {...props} />);
		const articleListItem = screen.getByTestId("article-list-item");
		expect(articleListItem).toBeInTheDocument();
	});

	it("should render article list item compact variant", () => {
		render(<ArticleListItemController {...props} variant="compact" />);
		const articleListItem = screen.getByTestId("article-list-item");
		expect(articleListItem).toBeInTheDocument();
	});

	describe("snaps", () => {
		it("should match snapshot for article list item controller", () => {
			render(<ArticleListItemController {...props} />);
			const articleListItem = screen.getByTestId("article-list-item");
			expect(articleListItem).toMatchSnapshot();
		});

		it("should match snapshot for compact article list", () => {
			render(<ArticleListItemController {...props} variant="compact" />);
			const articleListItem = screen.getByTestId("article-list-item");
			expect(articleListItem).toMatchSnapshot();
		});
	});
});
