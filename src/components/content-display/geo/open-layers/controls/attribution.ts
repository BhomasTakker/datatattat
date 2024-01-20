import Attribution from "ol/control/Attribution";

export interface AttributionControlOptions {
	collapsible?: boolean;
	collapsed?: boolean;
}

export const createAttributionControl = (
	options?: AttributionControlOptions
) => {
	const { collapsible, collapsed = true } = options || {};

	return new Attribution({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		collapsible,
		collapsed,
	});
};
