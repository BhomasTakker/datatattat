import { render, screen } from "@testing-library/react";
import { ArticleCard } from "./article-card";
import { ArticleCardMock } from "./article-card.mock";

const { props } = ArticleCardMock;

describe("ArticleStack", () => {
	it("should render article-stack", () => {
		render(<ArticleCard {...props} />);
		const stackElement = screen.getByTestId("article-card");
		expect(stackElement).toBeInTheDocument();
	});
});
