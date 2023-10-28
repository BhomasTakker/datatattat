import { render, screen } from "@testing-library/react";
import { Description } from "./description";
import { LOREM_3_S } from "mockData/text/lorem";
import { stripHTML } from "@/src/utils/html";
import { CSS } from "@/src/css/text";

// const stripHTMLSpy = jest.spyOn(require("@/src/utils/html/index"), "strpHTML");
jest.mock("@/src/utils/html", () => {
	return {
		...jest.requireActual("@/src/utils/html"),
		stripHTML: jest.fn(),
	};
});

(stripHTML as jest.Mock).mockImplementation((str: string) => str);

const maxLinesSpy = jest.spyOn(CSS, "maxLines");

describe("Description", () => {
	beforeEach(() => {
		(stripHTML as jest.Mock).mockClear();
		maxLinesSpy.mockClear();
	});

	it("should render Description", () => {
		render(<Description description={LOREM_3_S} />);
		const descriptionElement = screen.getByTestId("description");
		expect(descriptionElement).toBeInTheDocument();
	});

	it("should render expected text", () => {
		render(<Description description={LOREM_3_S} />);
		const descriptionElement = screen.getByText(LOREM_3_S);
		expect(descriptionElement).toBeInTheDocument();
	});

	describe("stripHTML", () => {
		it("should call stripHTML once", () => {
			render(<Description description={LOREM_3_S} />);
			expect(stripHTML).toHaveBeenCalledTimes(1);
		});
	});

	describe("snaps", () => {
		// Do a snap for default
		// and each prop or variant etc
		it("should match snapshot", () => {
			render(<Description description={LOREM_3_S} />);
			const descriptionElement = screen.getByTestId("description");
			expect(descriptionElement).toMatchSnapshot();
		});

		it("should render expected number of lines", () => {
			render(<Description description={LOREM_3_S} maxLines={3} />);
			const descriptionElement = screen.getByTestId("description");
			expect(descriptionElement).toMatchSnapshot();
		});
	});

	describe("max lines", () => {
		it("should render expected number of lines", () => {
			render(<Description description={LOREM_3_S} maxLines={3} />);
			const descriptionElement = screen.getByTestId("description");
			expect(maxLinesSpy).toHaveBeenCalledTimes(1);
			expect(maxLinesSpy).toHaveBeenCalledWith({ maxLines: 3 });
		});
	});
});
