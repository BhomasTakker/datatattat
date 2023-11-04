import { render, screen } from "@testing-library/react";
import { ArticleStack } from "./article-stack";
import { ArticleStackMock } from "./article-stack.mock";
const { props } = ArticleStackMock;
describe("ArticleStack", () => {
	it("should render article-stack", () => {
		render(<ArticleStack {...props} />);
		const stackElement = screen.getByTestId("article-stack");
		expect(stackElement).toBeInTheDocument();
	});
});
