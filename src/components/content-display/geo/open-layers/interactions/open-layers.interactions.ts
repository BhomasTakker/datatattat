import Map from "ol/Map";
import { setDragBoxInteraction } from "./drag-box.interaction";
import { setSelectInteraction } from "./select";
import { setModifyInteraction } from "./modify";
import KML from "ol/format/KML";
import GeoJSON from "ol/format/GeoJSON";
import { setDragAndDropInteraction } from "./drag-and-drop";
import { createLayer } from "../layers/open-layers.layers";
import { getLayerSource } from "../layers/sources/open-layers.sources";

interface CreateInteractionsOptions {}
// We can add one etc
export const createOpenLayersInteractions = (
	map: Map,
	// Pass array of interactions
	options: CreateInteractionsOptions
) => {
	///////////////////////////////////////////////
	// Can use as an input to modify - like oh wow!
	// What else what else what else?
	// How easy....?????
	///////////////////////////////////////
	// Instead of select this event
	// Combine Events/Interactions into ModifyFeatures
	/////////////////////////////////////////////////
	const selectInteraction = setSelectInteraction({
		cb: (selectEvent) => console.log({ selectEvent }),
	});
	map.addInteraction(setDragBoxInteraction({ map, minArea: 64 }));
	map.addInteraction(selectInteraction);
	map.addInteraction(
		setModifyInteraction({
			features: selectInteraction.getFeatures(),
			cb: (modifyEvent) => console.log({ modifyEvent }),
		})
	);

	// Again / pretty wow
	const formatConstructors = [KML, GeoJSON];
	map.addInteraction(
		setDragAndDropInteraction({
			formatConstructors,
			cb: (evt) => {
				const layer = createLayer(
					"VectorLayer",
					{},
					getLayerSource("Vector", {
						features: evt.features,
					})
				);

				map.addLayer(layer);
				map.getView().fit(layer.getSource().getExtent());
			},
		})
	);
	// map.getInteractions();
};
