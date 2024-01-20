// https://openlayers.org/en/latest/apidoc/module-ol_control_FullScreen-FullScreen.html
import FullScreen from "ol/control/FullScreen";

export interface FullScreenControlOptions {}

export const createFullScreenControl = (options?: FullScreenControlOptions) => {
	const {} = options || {};

	return new FullScreen({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		// Can pass a string, element, or Text... text looked bad
		// label: "Fullscreen",
		// labelActive: "Not Fullscreen",
	});
};
