import Collection from "ol/Collection";
import View from "ol/View";
import OverviewMap from "ol/control/OverviewMap";
import BaseLayer from "ol/layer/Base";

export interface OverviewMapControlOptions {
	collapsible?: boolean;
	collapsed?: boolean;
	layers?: Array<BaseLayer> | Collection<BaseLayer> | undefined;
	rotateWithView?: boolean;
	view?: View;
}

export const createOverviewMapControl = (
	options?: OverviewMapControlOptions
) => {
	const {
		collapsible = true, // should be true
		collapsed = true,
		layers,
		rotateWithView = false,
		view,
	} = options || {};

	return new OverviewMap({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		collapsible,
		collapsed,
		layers,
		rotateWithView,
		view,
	});
};
