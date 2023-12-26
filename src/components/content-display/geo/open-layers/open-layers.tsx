// https://taylor.callsen.me/using-openlayers-with-react-functional-components/
import { Box } from "@mui/material";
import Feature from "ol/Feature";
import Map from "ol/Map";
import { Geometry } from "ol/geom";
import { useEffect, useRef, useState } from "react";
import { CreateViewOptions } from "./view/open-layers.view";
import { Layer } from "./layers/open-layers.layers";

// not sure why that was so hard / thisisn't good though
import "node_modules/ol/ol.css";
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

interface OpenLayersMapProps {
	// features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
	// these were added to a layer I believe
	features: Feature<Geometry>[] | undefined;

	projection?: ViewProjection;
	projections?: CreateProjectionType[];

	baseLayers: Layer[];
	overlayLayers?: Layer[];

	interactions?: CreateInteraction[];
	controls?: CreateControl[];

	events?: CreateEvent[];

	viewOptions?: CreateViewOptions;

	width: string;
	height: string;
}

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

	return <Box ref={mapElement} width={width} height={height}></Box>;
};
