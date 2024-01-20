// https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomSlider-ZoomSlider.html
import ZoomSlider from "ol/control/ZoomSlider";

export interface ZoomSliderControlOptions {
	duration?: number;
}

export const createZoomSliderControl = (options?: ZoomSliderControlOptions) => {
	const { duration } = options || {};

	return new ZoomSlider({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		duration,
	});
};
