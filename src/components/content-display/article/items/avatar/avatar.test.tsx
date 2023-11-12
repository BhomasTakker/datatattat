import { render, screen } from "@testing-library/react";
import { ArticleAvatar } from "./avatar";
import { AVATAR_MOCK } from "./avatar.mock.data";
import { ListItemContextProvider } from "../context/list-item.context";
import { Article1 } from "../../mock/Articles.mock";

const mockFunc = jest.fn();

jest.mock("../hooks/useMeta", () => ({
	useMeta: () => mockFunc,
}));

const renderWithContext = (props: {
	alt: string;
	img: string;
	src: string;
}) => {
	render(
		<ListItemContextProvider value={{ item: Article1 }}>
			<ArticleAvatar {...props} />
		</ListItemContextProvider>
	);
};

describe("Article Avatar", () => {
	it("should render an ArticleAvatar ", () => {
		renderWithContext(AVATAR_MOCK);
		const avatarElement = screen.getByTestId("avatar");
		expect(avatarElement).toBeInTheDocument();
	});

	it("should render an img ", () => {
		renderWithContext(AVATAR_MOCK);
		const avatarElement = screen.getByRole("img");
		expect(avatarElement).toBeInTheDocument();
	});

	it("should render expected alt ", () => {
		renderWithContext(AVATAR_MOCK);
		const avatarElement = screen.getByAltText(AVATAR_MOCK.alt);
		expect(avatarElement).toBeInTheDocument();
	});

	it("should render image with expected src", () => {
		renderWithContext(AVATAR_MOCK);
		const avatarElement = screen.getByRole("img");
		expect(avatarElement).toHaveAttribute("src", AVATAR_MOCK.img);
	});

	it("should render empty fragment if no image", async () => {
		renderWithContext({ ...AVATAR_MOCK, img: "" });
		const avatarElement = screen.queryByTestId("avatar");
		expect(avatarElement).not.toBeInTheDocument();
	});

	describe("snaps", () => {
		it("should match snapshot", () => {
			renderWithContext(AVATAR_MOCK);
			const avatarElement = screen.getByTestId("avatar");
			expect(avatarElement).toMatchSnapshot();
		});
	});

	// describe("useMeta", () => {
	// we are rendering with context but no testing
	// or mocking of that context etc
	// so what is it doing?
	// we can render without context
	// but then we won't be testing all possibilities
	// });
});
