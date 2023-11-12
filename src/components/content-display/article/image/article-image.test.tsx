import { render, screen } from "@testing-library/react";
import { ArticleImage } from "./article-image";
import { imageData1 } from "./article-image.mock";

describe("ArticleImage", () => {
	it("should render article-image", () => {
		render(<ArticleImage {...imageData1} />);
		const stackElement = screen.getByTestId("article-image");
		expect(stackElement).toBeInTheDocument();
	});
});
