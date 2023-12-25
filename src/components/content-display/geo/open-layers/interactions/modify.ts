import { Condition } from "ol/events/condition";
import { StyleLike } from "ol/style/Style";
import Modify, { ModifyEvent } from "ol/interaction/Modify";
import { FlatStyleLike } from "ol/style/flat";
import VectorSource from "ol/source/Vector";
import { Collection, Feature } from "ol";

// There are more props but?
export interface SetModifyInteractionOptions {
	// Need a map of the ones we use - can we dynamically import things like this?
	condition?: Condition;
	pixelTolerance?: number;
	// Style is i.e. Fill for polygons, stroke for lines, image for points
	style?: StyleLike | FlatStyleLike;
	source?: VectorSource;
	features?: Collection<Feature>;
	wrapX?: boolean;
	snapToPointer?: boolean;
	cb: (e: ModifyEvent) => void;
}

export const setModifyInteraction = ({
	condition,
	pixelTolerance = 10,
	source,
	style,
	features,
	snapToPointer,
	wrapX = false,
	cb,
}: SetModifyInteractionOptions) => {
	const modifyInteraction = new Modify({
		// can technically create a list of conditions get by id
		condition,

		// You can get features as a return from select
		features,
		// get layer source...
		source,
		style,
		wrapX,
		snapToPointer,
		pixelTolerance,
	});

	/**
    change
    change:active
    error
    modifyend
    modifystart
    propertychange
   */

	// You don't necessarily need to add a callback
	// Each interaction has a default behaviour
	// maybe not each but yes
	// modifyInteraction.on("modifystart", cb);
	// modifyInteraction.on("modifyend", cb);
	// selectInteraction.on("propertychange", cb);
	return modifyInteraction;
};
