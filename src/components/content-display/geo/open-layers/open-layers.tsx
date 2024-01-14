// https://taylor.callsen.me/using-openlayers-with-react-functional-components/
import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { CreateViewOptions } from "./view/open-layers.view";
import { Layer } from "./layers/open-layers.layers";

import LegendControl from "ol-ext/control/Legend";

// not sure why that was so hard / this isn't good though
import "node_modules/ol/ol.css";
import "node_modules/ol-ext/dist/ol-ext.css";
import { CreateProjectionType } from "./projections/open-layers.projections";
import { useMap } from "./hooks/useMap";
import { CreateEvent, useMapEvent } from "./hooks/useMapEvent";
import { useMapProjections } from "./hooks/useMapProjections";
import { CreateControl, useMapControls } from "./hooks/useMapControls";
import {
	CreateInteraction,
	useMapInteractions,
} from "./hooks/useMapInteractions";
import { useMapLayers } from "./hooks/useMapLayers";
import { useMapView } from "./hooks/useMapView";
import { ViewProjection } from "./types/open-layers.types";
import { createInfoPopup } from "./overlays/popups/info-popup.overlay";

export interface OpenLayersMapProps {
	// features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
	// these were added to a layer I believe
	// features: Feature<Geometry>[] | undefined;

	// shouldn't be here

	projection?: ViewProjection;
	projections?: CreateProjectionType[];

	baseLayers: Layer[];
	overlayLayers?: Layer[];

	interactions?: CreateInteraction[];
	controls?: CreateControl[];

	events?: CreateEvent[];

	viewOptions?: CreateViewOptions;

	legend?: LegendControl;

	width: string;
	height: string;
}

// We can - almost certainly easily allow drawing/editing of maps
// saving and / or uploading maps to a db
// https://openlayers.org/workshop/en/vector/download.html

// i.e. layers selector - https://www.youtube.com/watch?v=k4b3nqDHCIU&list=PLSWT7gmk_6LrvfkAFzfBpNckEsaF7S2GB&index=7
export const OpenLayersMap = function Foo({
	projection,
	projections,
	baseLayers,
	overlayLayers = [],
	interactions = [],
	controls = [],
	events = [],
	viewOptions,
	legend,
	width,
	height,
}: OpenLayersMapProps) {
	// const [map, setMap] = useState<Map | undefined>();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	// const mapRef = useRef<any>();
	// mapRef.current = map;

	const { map: initialMap, ref: mapElement } = useMap({});
	useMapProjections({ projections, projection });

	const { view } = useMapView({
		map: initialMap,
		options: viewOptions,
	});

	useMapEvent({ map: initialMap, events: events });

	// Okay for some default controls perhaps
	// For more involved may need individual - like Legend?
	useMapControls({ map: initialMap, controls });

	useMapInteractions({ map: initialMap, interactions });

	useMapLayers({
		map: initialMap,
		baseLayers: baseLayers as Layer[],
		overlayLayers: overlayLayers,
		// features layer - pass in features layers array
	});

	// useEffect(() => {
	// 	if (!initialMap) {
	// 		return;
	// 	}

	// 	// save map and vector layer references to state
	// 	setMap(initialMap);

	// 	// This thing
	// 	// When a parent component gets removed this does not get called - I think
	// 	return () => initialMap.setTarget(undefined);
	// }, [initialMap]);

	// I dunno, really?
	// Make a hook perhaps?
	// At least a hook to match style
	// All controls need removing as per this
	// Add this, if pos, into
	useEffect(() => {
		if (!initialMap) {
			return;
		}
		legend && initialMap.addControl(legend);

		return () => {
			legend && initialMap.removeControl(legend);
		};
	}, [initialMap, legend]);

	useEffect(() => {
		if (!initialMap) {
			return;
		}
		createInfoPopup({ map: initialMap });

		// // console.log("ADD FEATURE", { features });
		// initialMap.addLayer(features);
	}, [initialMap]);

	// There's a way to do this
	// perhaps not like this though
	// It's like map size and view size - not sure
	// Effectively remove the margin and 100vw / set height
	// useEffect(() => {
	// 	if (!initialMap) {
	// 		return;
	// 	}
	// 	addEventListener("resize", (event) => {
	// 		// console.log({ innerWidth, innerHeight });
	// 		initialMap.setSize([innerWidth, innerHeight]);
	// 	});

	// 	return () => {
	// 		removeEventListener("resize", (event) => {
	// 			// console.log({ innerWidth, innerHeight });
	// 			initialMap.setSize([innerWidth, innerHeight]);
	// 		});
	// 	};
	// 	// initialMap.setSize(size);
	// }, [initialMap]);

	return (
		<Box
			ref={mapElement}
			style={{
				// displayMap - style variant
				// height to be responsive - or percentage
				position: "absolute",
				left: 0,
				width: "100vw",
				height: "70vh",
				boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
				// "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
				// "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
				// "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
			}}
		></Box>
		// <Box
		// 	ref={mapElement}
		// 	width={width}
		// 	height={height}
		// 	style={{
		// 		position: "absolute",
		// 		left: 0,
		// 		width: "100%",
		// 		height: "70%",
		// 	}}
		// ></Box>box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	);
};
