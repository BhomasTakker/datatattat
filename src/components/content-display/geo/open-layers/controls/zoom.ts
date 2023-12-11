import Zoom from "ol/control/Zoom";

export interface ZoomControlOptions {
	duration?: number;
	delta?: number;
}

export const createZoomControl = (options?: ZoomControlOptions) => {
	const { duration = 250, delta = 1 } = options || {};

	return new Zoom({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		duration,
		delta,
	});
};
