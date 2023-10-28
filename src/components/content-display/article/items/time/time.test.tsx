import { render, screen } from "@testing-library/react";
import { Time } from "./Time";
import {
	TIME_AGO_10_YEAR,
	TIME_AGO_1_DAY,
	TIME_AGO_1_HOUR,
	TIME_AGO_1_MIN,
	TIME_AGO_1_MONTH,
	TIME_AGO_1_SEC,
	TIME_AGO_1_WEEK,
	TIME_AGO_1_YEAR,
	TIME_AGO_3_WEEK,
	TIME_AGO_5_DAY,
	TIME_AGO_5_HOUR,
	TIME_AGO_5_MIN,
	TIME_AGO_5_SEC,
	TIME_AGO_6_MONTH,
	TIME_NOW,
} from "mockData/time";

const nowSpy = jest.spyOn(Date, "now");
const toDateStringSpy = jest.spyOn(global.Date.prototype, "toDateString");
const toLocaleStringSpy = jest.spyOn(global.Date.prototype, "toLocaleString");
const toLocaleDateStringSpy = jest.spyOn(
	global.Date.prototype,
	"toLocaleDateString"
);
const toLocaleTimeStringSpy = jest.spyOn(
	global.Date.prototype,
	"toLocaleTimeString"
);

describe("Time", () => {
	beforeEach(() => {
		nowSpy.mockClear();
	});

	test("renders Time", () => {
		render(<Time />);
		const timeElement = screen.getByTestId("time");
		expect(timeElement).toBeInTheDocument();
	});

	test("renders expected Time string", () => {
		const expectedTime = TIME_AGO_1_MIN;
		render(<Time time={expectedTime} variant="string" />);
		const timeElement = screen.getByText(expectedTime.toDateString());
		expect(timeElement).toBeInTheDocument();
	});

	test("renders expected Time locale string", () => {
		const expectedTime = TIME_AGO_1_MIN;
		render(<Time time={expectedTime} variant="locale" />);
		const timeElement = screen.getByText(expectedTime.toLocaleString());
		expect(timeElement).toBeInTheDocument();
	});

	test("renders expected Time locale-date string", () => {
		const expectedTime = TIME_AGO_1_MIN;
		render(<Time time={expectedTime} variant="locale-date" />);
		const timeElement = screen.getByText(expectedTime.toLocaleDateString());
		expect(timeElement).toBeInTheDocument();
	});

	test("renders expected Time locale-time string", () => {
		const expectedTime = TIME_AGO_1_MIN;
		render(<Time time={expectedTime} variant="locale-time" />);
		const timeElement = screen.getByText(expectedTime.toLocaleTimeString());
		expect(timeElement).toBeInTheDocument();
	});

	// Date functions
	describe("Date.now", () => {
		it("should call Date.now() twice when no time provided", () => {
			render(<Time />);
			expect(nowSpy).toHaveBeenCalledTimes(2);
		});

		it("should call Date.now() once when time provided", () => {
			const now = Date.now();
			nowSpy.mockClear();
			render(<Time time={now} />);
			expect(nowSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe("Variant", () => {
		beforeEach(() => {
			toDateStringSpy.mockClear();
			toLocaleStringSpy.mockClear();
			toLocaleDateStringSpy.mockClear();
			toLocaleTimeStringSpy.mockClear();
		});

		it("should call Date.toDateString() once when string variant provided", () => {
			render(<Time variant="string" />);
			expect(toDateStringSpy).toHaveBeenCalledTimes(1);
		});

		it("should call Date.toLocaleString() once when string variant provided", () => {
			render(<Time variant="locale" />);
			expect(toLocaleStringSpy).toHaveBeenCalledTimes(1);
		});

		it("should call Date.toLocaleDateString() once when string variant provided", () => {
			render(<Time variant="locale-date" />);
			expect(toLocaleDateStringSpy).toHaveBeenCalledTimes(1);
		});

		it("should call Date.toLocaleTimeString() once when string variant provided", () => {
			render(<Time variant="locale-time" />);
			expect(toLocaleTimeStringSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe("Age", () => {
		// it.each these
		it("should render Published Now!", () => {
			const expectedTime = TIME_NOW;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published now!/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 second ago", () => {
			const expectedTime = TIME_AGO_1_SEC;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 second ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected seconds ago", () => {
			const expectedTime = TIME_AGO_5_SEC;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 5 seconds ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 minute ago", () => {
			const expectedTime = TIME_AGO_1_MIN;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 minute ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected minutes ago", () => {
			const expectedTime = TIME_AGO_5_MIN;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 5 minutes ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 hour ago", () => {
			const expectedTime = TIME_AGO_1_HOUR;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 hour ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected hours ago", () => {
			const expectedTime = TIME_AGO_5_HOUR;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 5 hours ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 day ago", () => {
			const expectedTime = TIME_AGO_1_DAY;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 day ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected days ago", () => {
			const expectedTime = TIME_AGO_5_DAY;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 5 days ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 week ago", () => {
			const expectedTime = TIME_AGO_1_WEEK;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 week ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected weeks ago", () => {
			const expectedTime = TIME_AGO_3_WEEK;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 3 weeks ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 month ago", () => {
			const expectedTime = TIME_AGO_1_MONTH;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 month ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected months ago", () => {
			const expectedTime = TIME_AGO_6_MONTH;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 6 months ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render 1 year ago", () => {
			const expectedTime = TIME_AGO_1_YEAR;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 1 year ago/i);
			expect(timeElement).toBeInTheDocument();
		});

		it("should render expected years ago", () => {
			const expectedTime = TIME_AGO_10_YEAR;
			render(<Time time={expectedTime} variant="age" />);
			const timeElement = screen.getByText(/published 10 years ago/i);
			expect(timeElement).toBeInTheDocument();
		});
	});
});
