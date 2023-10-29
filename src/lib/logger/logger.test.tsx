import { render, screen } from "@testing-library/react";
import { log, setLog } from ".";

const consoleLogSpy = jest.spyOn(console, "log");

describe("logger", () => {
	beforeEach(() => {
		consoleLogSpy.mockClear();
	});

	it("should be off by default", () => {
		log({ code: "FEATURE:0000", message: "Hello World!" });
		expect(consoleLogSpy).not.toHaveBeenCalled();
	});

	it("should log a message", () => {
		setLog(true);
		log({ code: "FEATURE:0000", message: "Hello World!" });
		expect(consoleLogSpy).toHaveBeenCalledTimes(1);
	});
});
