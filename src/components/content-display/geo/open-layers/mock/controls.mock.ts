import { format } from "ol/coordinate";
import { CreateControl } from "../controls/open-layers.controls";
import { createOpenLayersView } from "../view/open-layers.view";
import { getCurrentProjection } from "../projections/open-layers.projections";
import { createLayer } from "../layers/open-layers.layers";
import { getTileLayerSource } from "../layers/sources/open-layers.sources";

const view = createOpenLayersView({ projection: getCurrentProjection() });
const exampleLayer = createLayer(
	"TileLayer",
	{},
	getTileLayerSource("OSM", {})
);

export const mockOSControls: CreateControl[] = [
	{
		id: "FullScreen",
	},
	{
		// We want to associate id with relevant control
		id: "ZoomSlider",
		options: {
			duration: 1000,
		},
	},
	{
		id: "ZoomToExtent",
	},
	{
		id: "Zoom",
		options: { duration: 1000, delta: 10 },
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
		id: "ScaleLine",
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
