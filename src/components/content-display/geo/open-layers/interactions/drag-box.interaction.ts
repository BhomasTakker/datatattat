// generic if possible
import DragBox from "ol/interaction/DragBox";
import { altKeyOnly } from "ol/events/condition";
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

interface SetDragBoxInteractionOptions {
	map: Map;
}

// works but does not draw a box
export const setDragBoxInteraction = ({
	map,
}: SetDragBoxInteractionOptions) => {
	const dragBoxInteraction = new DragBox({
		// can technically create a list of conditions
		condition: altKeyOnly,
	});

	map.addInteraction(dragBoxInteraction);

	// pass callback - we will call the callback passing dragBox asa parameter
	// Then you can specify a list of events and available actions?
	dragBoxInteraction.on("boxend", () => {
		const extent = dragBoxInteraction.getGeometry().getExtent();
		// this or default
		map.getView().fit(extent as Extent);
	});
};

// export const addInteraction = (event: EventType, callback: () => void) => {
//   dragBoxInteraction.on(event, () => {
//     const extent = dragBoxInteraction.getGeometry().getExtent();
//     map.getView().fit(extent);
//   });
// };
