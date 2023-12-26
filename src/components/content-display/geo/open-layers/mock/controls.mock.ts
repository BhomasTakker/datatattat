import { format } from "ol/coordinate";
import { createOpenLayersView } from "../view/open-layers.view";
import { getCurrentProjection } from "../projections/open-layers.projections";
import { createLayer } from "../layers/open-layers.layers";
import { getTileLayerSource } from "../layers/sources/open-layers.sources";
import { CreateControl } from "../hooks/useMapControls";

// Cannot use dynamic value and hope it works!
// Mock called forst unless generated when called (probs the way forward tbh)
// pass in

export const getMockControls = (): CreateControl[] => {
	const view = createOpenLayersView({ projection: "EPSG:29901" });
	const exampleLayer = createLayer(
		"TileLayer",
		{},
		getTileLayerSource("OSM", {})
	);

	return [
		{
			id: "FullScreen",
		},
		{
			id: "ZoomToExtent",
		},
		{
			id: "Zoom",
			options: { duration: 1000 },
		},
		{
			id: "Rotate",
			options: { autoHide: false },
		},
		{
			id: "Attributions",
			options: { collapsible: false, collapsed: false },
		},
		{
			id: "Overview",
			options: {
				collapsible: false,
				layers: [exampleLayer],
				view,
			},
		},
		{
			// We want to associate id with relevant control
			id: "ZoomSlider",
			options: {
				duration: 1000,
			},
		},
		{
			id: "ScaleLine",
		},
		{
			id: "MousePosition",
			options: {
				projection: "EPSG:4326",
				coordinateFormat: (coordinate) => {
					if (!coordinate) return "";

					return format(coordinate, "{y}, {x}", 3);
				},
			},
		},
	];
};
