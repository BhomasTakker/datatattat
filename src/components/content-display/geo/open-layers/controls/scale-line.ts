import MapEvent from "ol/MapEvent";
import ScaleLine from "ol/control/ScaleLine";
import classes from "./scale-line.module.css";

export type Units = "degrees" | "imperial" | "nautical" | "metric" | "us";

export interface ScaleLineControlOptions {
	className?: string;
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
	render?: (arg0: MapEvent) => void;
	target?: HTMLElement | string;
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

	dpi?: number;
}

export const createScaleLineControl = (options?: ScaleLineControlOptions) => {
	const {
		// className = "ol-scale-bar",

		minWidth = 64,
		maxWidth,
		render,
		target,
		units = "metric",
		bar = false,
		steps = 4,
		text = false, // show scale on bar/line
		dpi,
	} = options || {};

	return new ScaleLine({
		// You can pass in or use default
		className: classes["scale-line"],
		// target: , provide a target if you want the control to be rendered outside the map viewport
		minWidth,
		maxWidth,
		render,
		target,
		units,
		bar,
		steps,
		text,
		dpi,
	});
};
