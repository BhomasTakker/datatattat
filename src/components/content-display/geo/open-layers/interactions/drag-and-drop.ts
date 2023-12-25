import DragAndDrop, { DragAndDropEvent } from "ol/interaction/DragAndDrop";
import VectorSource from "ol/source/Vector";
import { ProjectionLike } from "ol/proj";

// There are more props but?
export interface SetDragAndDropInteractionOptions {
	// I absolutely don't know
	formatConstructors?: any;
	source?: VectorSource; // did not like Function
	// Style is i.e. Fill for polygons, stroke for lines, image for points
	projection?: ProjectionLike;
	target?: HTMLElement;
	cb: (e: DragAndDropEvent) => void;
}

export const setDragAndDropInteraction = ({
	formatConstructors,
	source,
	projection,
	target,
	cb,
}: SetDragAndDropInteractionOptions) => {
	const dragAndDropInteraction = new DragAndDrop({
		// can technically create a list of conditions get by id
		formatConstructors,
		source,
		projection,
		target,
	});

	dragAndDropInteraction.on("addfeatures", cb);

	return dragAndDropInteraction;
};
