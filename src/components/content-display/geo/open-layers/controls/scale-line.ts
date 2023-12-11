import ScaleLine from "ol/control/ScaleLine";

export type Units = "degrees" | "imperial" | "nautical" | "metric" | "us";

export interface ScaleLineControlOptions {
	/**
	 * MinWidth allowed by the control - default 64px
	 * @type number
	 */
	minWidth?: number;
	/**
	 * Max Width allowed by the control - default unnkown / undefined
	 * @type number
	 */
	maxWidth?: number;
	/**
	 * The units to use
	 * @type string
	 * @options: "degrees" | "imperial" | "nautical" | "metric" | "us"
	 * @default metric
	 */
	units?: Units;
	/**
	 * Use a bar or a line
	 * @type boolean
	 * @default false
	 */
	bar?: boolean;
	/**
	 * Number of steps to use
	 * Only applies when bar is set to true
	 * @type number
	 */
	steps?: number;
	/**
	 * Show scale text above control
	 * Only applies when bar is set to true
	 */
	text?: boolean;
}

export const createScaleLineControl = (options?: ScaleLineControlOptions) => {
	const {
		minWidth = 64,
		maxWidth,
		units = "metric",
		bar = false,
		steps = 4,
		text = false, // show scale on bar/line
	} = options || {};

	return new ScaleLine({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		minWidth,
		maxWidth,
		units,
		bar,
		steps,
		text,
	});
};
