// generic if possible
import DragBox, { DragBoxEvent } from "ol/interaction/DragBox";
import { Condition, altKeyOnly } from "ol/events/condition";
import { Extent } from "openlayers";
import Map from "ol/Map";
import { EventTypes } from "ol/Observable";

// const dragBoxInteraction = new DragBox({
// 	condition: altKeyOnly,
// });

///////////////////////////
// Okay yes
// We can easily, it seems, add interaction to the map to draw polygons etc
// We can then get the geojson of that drawn polygon, etc
// Store to DB and use
////////////////////////////
// Some foibles or just me but seems very straightforwad and powerful
/////////////////////////////////////////

type EventType =
	| "propertychange"
	| "change:active"
	| "boxcancel"
	| "boxdrag"
	| "boxend"
	| EventTypes;

export interface SetDragBoxInteractionOptions {
	minArea?: number;
	cb: (e: DragBoxEvent) => void;
	condition?: Condition;
}

export const setDragBoxInteraction = ({
	cb,
	minArea = 64,
	condition,
}: SetDragBoxInteractionOptions) => {
	const dragBoxInteraction = new DragBox({
		// can technically create a list of conditions get by id
		minArea,
		condition,
	});

	// map.addInteraction(dragBoxInteraction);

	// Woukd you do this or just have set interactions available
	// Extent would / Could be for zoom or select
	// But what else are you really going to need
	// And even then - just create available interactions
	// i.e. ZoomOnDragBox, SelectFeaturesOnDragBox
	// move on click, zoom on click, select on click, coords on click
	//////////////////////////////////////////////////////////
	// pass callback - we will call the callback passing dragBox asa parameter
	// Then you can specify a list of events and available actions?
	// pass callback from an array?
	// ///////////////////////////////////////////
	// Create the function and provide a list of available functions to use as a callback?
	// i.e. These are the expected / sensible uses for the event
	// () => {
	// 	const extent = dragBoxInteraction.getGeometry().getExtent();
	// 	map.getView().fit(extent as Extent);
	// }

	dragBoxInteraction.on("boxend", cb);

	return dragBoxInteraction;
};

// export const addInteraction = (event: EventType, callback: () => void) => {
//   dragBoxInteraction.on(event, () => {
//     const extent = dragBoxInteraction.getGeometry().getExtent();
//     map.getView().fit(extent);
//   });
// };
