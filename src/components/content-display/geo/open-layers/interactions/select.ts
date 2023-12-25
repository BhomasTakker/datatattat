import Map from "ol/Map";
import { Condition } from "ol/events/condition";
import Layer from "ol/layer/Layer";
import { StyleLike } from "ol/style/Style";
import Select, { SelectEvent } from "ol/interaction/Select";

// There are more props but?
export interface SetSelectInteractionOptions {
	// Need a map of the ones we use - can we dynamically import things like this?
	condition?: Condition;
	layers?: Layer[]; // did not like Function
	// Style is i.e. Fill for polygons, stroke for lines, image for points
	style?: StyleLike | null;
	multi?: boolean;
	hitTolerance?: number;
	cb: (e: SelectEvent) => void;
}

export const setSelectInteraction = ({
	condition,
	layers,
	style,
	multi = false,
	hitTolerance = 0,
	cb,
}: SetSelectInteractionOptions) => {
	const selectInteraction = new Select({
		// can technically create a list of conditions get by id
		condition,
		layers,
		style,
		multi,
		hitTolerance,
	});

	selectInteraction.on("select", cb);

	return selectInteraction;
};
