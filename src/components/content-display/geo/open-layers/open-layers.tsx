// https://taylor.callsen.me/using-openlayers-with-react-functional-components/
import { Box } from "@mui/material";
import Feature from "ol/Feature";
import Map from "ol/Map";
import { Geometry, LineString, Point, Polygon } from "ol/geom";
import { useEffect, useRef, useState } from "react";
import { CreateViewOptions } from "./view/open-layers.view";
import { Layer } from "./layers/open-layers.layers";

import Legend from "ol-ext/legend/Legend";
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

export interface OpenLayersMapProps {
	// features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
	// these were added to a layer I believe
	// features: Feature<Geometry>[] | undefined;

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
export const OpenLayersMap = ({
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
}: OpenLayersMapProps) => {
	const [map, setMap] = useState<Map | undefined>();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	const mapRef = useRef<any>();
	mapRef.current = map;

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
	});

	useEffect(() => {
		if (!initialMap) {
			return;
		}

		// save map and vector layer references to state
		setMap(initialMap);

		return () => initialMap.setTarget(undefined);
	}, [initialMap]);

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

	// There's a way to do this
	// perhaps not like this though
	// It's like map size and view size - not sure
	// Effectively remove the margin and 100vw / set height
	// useEffect(() => {
	// 	if (!initialMap) {
	// 		return;
	// 	}
	// 	addEventListener("resize", (event) => {
	// 		console.log({ innerWidth, innerHeight });
	// 		initialMap.setSize([innerWidth, innerHeight]);
	// 	});

	// 	return () => {
	// 		removeEventListener("resize", (event) => {
	// 			console.log({ innerWidth, innerHeight });
	// 			initialMap.setSize([innerWidth, innerHeight]);
	// 		});
	// 	};
	// 	// initialMap.setSize(size);
	// }, [initialMap]);

	return (
		<Box
			ref={mapElement}
			// minHeight={"400px"}
			// minWidth={"400px"}
			width={width}
			height={height}
		></Box>
	);
};
