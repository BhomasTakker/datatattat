// https://taylor.callsen.me/using-openlayers-with-react-functional-components/

import { Box } from "@mui/material";
import Feature from "ol/Feature";
import Map from "ol/Map";
import { Geometry } from "ol/geom";
import { useEffect, useRef, useState } from "react";
import { createOpenLayersView } from "./view/open-layers.view";
import { Layer, createLayers } from "./layers/open-layers.layers";

// not sure why that was so hard / thisisn't good though
import "node_modules/ol/ol.css";
import {
	CreateProjectionType,
	createProjections,
	getCurrentProjection,
} from "./projections/open-layers.projections";
import { useMap } from "./hooks/useMap";
import { baseLayers } from "./layers/open-layers.layers.mock";
import { getMockControls } from "./mock/controls.mock";
import { mockOLInteractions } from "./mock/interactions.mock";
import { CreateEvent, useMapEvent } from "./hooks/useMapEvent";
import { MapBrowserEvent } from "ol";
import { useMapProjections } from "./hooks/useMapProjections";
import { useMapControls } from "./hooks/useMapControls";
import { useMapInteractions } from "./hooks/useMapInteractions";
import { useMapLayers } from "./hooks/useMapLayers";
import { useMapView } from "./hooks/useMapView";

interface OpenLayersMapProps {
	// features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
	features: Feature<Geometry>[] | undefined;
}

// export type ViewProjection = "EPSG:3857" | "EPSG:4326";

/////////////////////////////////////////////////////
// We would wrap this component and pass down visible layers etc
// Then- we WOULDNT re-render the component
// just update the map
// Perhaps a better way of managing i.e. context but the gyst is the same
/////////////////////////////////////////////////////////////////////////////////
// You COULD pass a map ref down
// That way our wrapper could have access to map
// And we can add more complex functionality
// Our ref can equal the ref wed are using
// OR it could be the same ref - whatever
////////////////////////////////////////////////

const projectionDefinition: CreateProjectionType = {
	projection: "EPSG:29901",
	def: "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1 +x_0=200000 +y_0=250000 +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs +type=crs",
};

// Seems problematic
// pass in array - prop
createProjections([projectionDefinition]);
// // if projection then set projection - prop
// setCurrentProjection("EPSG:29901");

const projections = [projectionDefinition];
const currentProjection = "EPSG:29901";

// const view = createOpenLayersView({
// 	// center: [-1.1397207380041652, 52.63837630084822],
// 	center: [0, 0],
// 	projection: getCurrentProjection(),
// });

// baseLayers & overlayLayers
const overlayLayers: Layer[] = [];
//

const interactions = mockOLInteractions;
const controls = getMockControls(); // should be the standard

console.log({ projectionOL: getCurrentProjection() });

const mockClickEvent = {
	id: "click",
	callback: (e: MapBrowserEvent<UIEvent>) => {
		console.log("CLICK! pixel ", e.pixel);
		console.log("CLICK! coordinate ", e.coordinate);
		console.log("CLICK! e ", e);
	},
};
const mockDblClickEvent = {
	id: "dblclick",
	callback: (e: MapBrowserEvent<UIEvent>) => {
		console.log("dblclick! pixel ", e.pixel);
		console.log("dblclick! coordinate ", e.coordinate);
		console.log("dblclick! e ", e);
	},
};
const events: CreateEvent[] = [
	mockClickEvent as CreateEvent,
	mockDblClickEvent as CreateEvent,
];

const width = "95vw";
const height = "95vh";

// Would you not just pass view, layers etc in rather than initilise?
// Probably thinking too much - move on
// We can get view etc and anything else from map - use a reference
// We need to add a controls panel left/top etc
// key layer, etc?
// i.e. layers selector - https://www.youtube.com/watch?v=k4b3nqDHCIU&list=PLSWT7gmk_6LrvfkAFzfBpNckEsaF7S2GB&index=7
export const OpenLayersMap = ({ features }: OpenLayersMapProps) => {
	const [map, setMap] = useState<Map | undefined>();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	const mapRef = useRef<any>();
	mapRef.current = map;

	const { map: initialMap, ref: mapElement } = useMap({});
	useMapProjections({ projections, projection: currentProjection });

	const { view } = useMapView({
		map: initialMap,
		options: { center: [0, 0], projection: getCurrentProjection() },
	});
	// Works v well
	// Question is why not more?
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
