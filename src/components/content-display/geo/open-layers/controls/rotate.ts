import Rotate from "ol/control/Rotate";

export interface RotateControlOptions {
	duration?: number;
	autoHide?: boolean;
}

export const createRotateControl = (options?: RotateControlOptions) => {
	const { duration = 250, autoHide = true } = options || {};

	return new Rotate({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		duration,
		autoHide,
	});
};
