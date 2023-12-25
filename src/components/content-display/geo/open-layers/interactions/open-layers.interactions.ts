import OSMap from "ol/Map";
import {
	SetDragBoxInteractionOptions,
	setDragBoxInteraction,
} from "./drag-box.interaction";
import { SetSelectInteractionOptions, setSelectInteraction } from "./select";
import { SetModifyInteractionOptions, setModifyInteraction } from "./modify";
import KML from "ol/format/KML";
import GeoJSON from "ol/format/GeoJSON";
import {
	SetDragAndDropInteractionOptions,
	setDragAndDropInteraction,
} from "./drag-and-drop";
import { createLayer } from "../layers/open-layers.layers";
import { getLayerSource } from "../layers/sources/open-layers.sources";

type CreateInteractionsOptions =
	| SetSelectInteractionOptions
	| SetDragBoxInteractionOptions
	| SetModifyInteractionOptions
	| SetDragAndDropInteractionOptions;

type Interactions = "Select" | "DragBox" | "Modify" | "DragAndDrop";

export type CreateInteraction = {
	id: Interactions;
	options?: CreateInteractionsOptions;
};

const interactionsMap = new Map<Interactions, any>([
	["Select", setSelectInteraction],
	["DragBox", setDragBoxInteraction],
	["Modify", setModifyInteraction],
	["DragAndDrop", setDragAndDropInteraction],
]);

// We can add one etc
export const createOpenLayersInteractions = (
	map: OSMap,
	// Pass array of interactions
	interactions: CreateInteraction[]
) => {
	interactions.forEach((interaction) => {
		const { id, options } = interaction;
		const initInteraction = interactionsMap.get(id);
		if (!initInteraction) {
			return;
		}
		console.log({ interaction });
		map.addInteraction(initInteraction(options));
	});
	///////////////////////////////////////////////
	// Can use as an input to modify - like oh wow!
	// What else what else what else?
	// How easy....?????
	///////////////////////////////////////
	// Instead of select this event
	// Combine Events/Interactions into ModifyFeatures
	/////////////////////////////////////////////////
	// const selectInteraction = setSelectInteraction({
	// 	cb: (selectEvent) => console.log({ selectEvent }),
	// });
	// // map.addInteraction(setDragBoxInteraction({ map, minArea: 64 }));
	// map.addInteraction(selectInteraction);
	// map.addInteraction(
	// 	setModifyInteraction({
	// 		features: selectInteraction.getFeatures(),
	// 		cb: (modifyEvent) => console.log({ modifyEvent }),
	// 	})
	// );

	// // Again / pretty wow
	// const formatConstructors = [KML, GeoJSON];
	// map.addInteraction(
	// 	setDragAndDropInteraction({
	// 		formatConstructors,
	// 		cb: (evt) => {
	// 			const layer = createLayer(
	// 				"VectorLayer",
	// 				{},
	// 				getLayerSource("Vector", {
	// 					features: evt.features,
	// 				})
	// 			);

	// 			map.addLayer(layer);
	// 			map.getView().fit(layer.getSource().getExtent());
	// 		},
	// 	})
	// );
	// map.getInteractions();
};
