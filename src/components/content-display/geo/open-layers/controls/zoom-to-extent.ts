import ZoomToExtent from "ol/control/ZoomToExtent";

export interface ZoomToExtentControlOptions {}

export const createZoomToExtentControl = (
	options?: ZoomToExtentControlOptions
) => {
	const {} = options || {};

	return new ZoomToExtent({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
	});
};
