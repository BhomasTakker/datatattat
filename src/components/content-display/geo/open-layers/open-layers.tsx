// https://taylor.callsen.me/using-openlayers-with-react-functional-components/

import { Box } from "@mui/material";
import Feature from "ol/Feature";
import Map from "ol/Map";
import { Geometry } from "ol/geom";
import { useEffect, useRef, useState } from "react";
import { createOpenLayersView } from "./view/open-layers.view";
import { createOpenLayersControls } from "./controls/open-layers.controls";
import { createLayers } from "./layers/open-layers.layers";
import { ViewProjection } from "./types/open-layers.types";
import { setDragBoxInteraction } from "./interactions/drag-box.interaction";

// not sure why that was so hard
import "node_modules/ol/ol.css";

interface OpenLayersMapProps {
	// features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
	features: Feature<Geometry>[] | undefined;
}

// export type ViewProjection = "EPSG:3857" | "EPSG:4326";

const projection: ViewProjection = "EPSG:3857";

// We need to add a controls panel left/top etc
// key layer, etc?
// i.e. layers selector - https://www.youtube.com/watch?v=k4b3nqDHCIU&list=PLSWT7gmk_6LrvfkAFzfBpNckEsaF7S2GB&index=7
export const OpenLayersMap = ({ features }: OpenLayersMapProps) => {
	const [map, setMap] = useState<Map | undefined>();

	// Would be pass in view controls
	// layers set
	// interactions set
	// overlays set
	// controls set
	// We do need to look into styling controls, etc
	// if only for positioning

	// pull refs
	const mapElement = useRef();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	const mapRef = useRef<any>();
	mapRef.current = map;

	// Could be an initialise Map hook
	useEffect(() => {
		const initialMap = new Map({
			target: mapElement.current,
			layers: [],
			view: createOpenLayersView({
				center: [-1.1397207380041652, 52.63837630084822],
				projection,
			}),
			// A blank array removes default controls
			controls: [],
			// same would be for interactions
			// interactions: []

			// Understand this better
			keyboardEventTarget: document,
		});

		// Don't like passing the map but...
		// Create layers
		// Perhaps look at controls
		// Provided a set of layers data
		// loop and create by types and options
		createLayers({ map: initialMap, data: {} });

		// I assume we want an add layer
		// cretae layers in a layers hook
		// update on change ??
		// Add layer / redraw layer etc?

		// We need to look at overlays again
		// Overlays are us drawing html elements over the map
		// Quite possibly and probably this also means a canvas
		// create Overlays

		// save map and vector layer references to state
		setMap(initialMap);

		// Do the same as controls
		// A file for each possible interaction / and their events
		// Provide an arrauy of interactiosn and a callback
		setDragBoxInteraction({ map: initialMap });

		// need provide a set of controls and their options
		createOpenLayersControls(initialMap);

		return () => initialMap.setTarget(undefined);
	}, []);

	return <Box ref={mapElement} width="95vw" height="95vh"></Box>;
};

// create overlay
// We are going to position an overlay - a component/element
// At this position
// This, then, could be your graphics layer?
// graphics surely better as canvas / html would nbe information etc
