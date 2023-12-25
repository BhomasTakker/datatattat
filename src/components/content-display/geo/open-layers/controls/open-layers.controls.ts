import Map from "ol/Map";
import { format } from "ol/coordinate";
import { createScaleLineControl } from "./scale-line";
import { createFullScreenControl } from "./full-screen";
import { createZoomSliderControl } from "./zoom-slider";
import { createZoomToExtentControl } from "./zoom-to-extent";
import { createZoomControl } from "./zoom";
import { createRotateControl } from "./rotate";
import { createAttributionControl } from "./attribution";
import { createOverviewMapControl } from "./overview-map";
import { createMousePositionControl } from "./mouse-position";
import { createLayer } from "../layers/open-layers.layers";
import { createOpenLayersView } from "../view/open-layers.view";
import { getTileLayerSource } from "../layers/sources/open-layers.sources";
import { getCurrentProjection } from "../projections/open-layers.projections";

// You can create basic controls by using the given Controls class

interface CreateControlsOptions {}

const exampleLayer = createLayer(
	"TileLayer",
	{},
	getTileLayerSource("OSM", {})
);

// Would need options to make it work well
// assume default max zoom etc are out of sync
// const exampleLayer = createLayer(
// 	"TileLayer",
// 	{},
// 	getLayerSource("StadiaMaps", { layer: "stamen_watercolor" })
// );

// create Control pass opttions
// list of controls
// Provide map and a controls set
// Loop through array applying each control
export const createOpenLayersControls = (
	map: Map,
	options?: CreateControlsOptions
) => {
	// loop given set taking control id and control options

	map.addControl(createFullScreenControl());
	map.addControl(createZoomSliderControl({ duration: 1000 }));
	map.addControl(createZoomToExtentControl());
	map.addControl(createZoomControl({ duration: 1000, delta: 10 }));
	map.addControl(createRotateControl({ autoHide: false }));
	// needs an attribution of course
	map.addControl(
		createAttributionControl({ collapsible: false, collapsed: false })
	);

	// We can provide a view to specify what exactly we want to show
	// We need a create view
	// we need a create layer
	// projectionneeds to match map projection else it will be out of sync but might be dead
	const view = createOpenLayersView({ projection: getCurrentProjection() });
	map.addControl(
		createOverviewMapControl({
			collapsible: false,
			layers: [exampleLayer],
			view,
		})
	);
	map.addControl(
		createMousePositionControl({
			projection: "EPSG:4326",
			coordinateFormat: (coordinate) => {
				if (!coordinate) return "";

				return format(coordinate, "{y}, {x}", 3);
			},
		})
	);

	map.addControl(createScaleLineControl());
};
