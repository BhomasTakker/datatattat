import Map from "ol/Map";
import OSM from "ol/source/OSM";
import { createScaleLineControl } from "./scale-line";
import { createFullScreenControl } from "./full-screen";
import { createZoomSliderControl } from "./zoom-slider";
import { createZoomToExtentControl } from "./zoom-to-extent";
import { createZoomControl } from "./zoom";
import { createRotateControl } from "./rotate";
import { createAttributionControl } from "./attribution";
import { createOverviewMapControl } from "./overview-map";
import { createMousePositionControl } from "./mouse-position";
import TileLayer from "ol/layer/Tile";
import { createTileLayer } from "../layers/open-layers.layers";
import { createOpenLayersView } from "../view/open-layers.view";

// You can create basic controls by using the given Controls class

interface CreateControlsOptions {}

// const exampleLayer = new TileLayer({
// 	source: new OSM(),
// });

const exampleLayer = createTileLayer({ type: "OSM" });

// Provide map and a controls set
// Loop through array applying each control
export const createOpenLayersControls = (
	map: Map,
	options?: CreateControlsOptions
) => {
	// loop given set taking control id and control options
	map.addControl(createScaleLineControl());
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
	const view = createOpenLayersView();
	map.addControl(
		createOverviewMapControl({
			collapsible: false,
			layers: [exampleLayer],
			view,
		})
	);
	map.addControl(createMousePositionControl());
};
