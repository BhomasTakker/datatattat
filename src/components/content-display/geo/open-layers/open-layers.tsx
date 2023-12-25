// https://taylor.callsen.me/using-openlayers-with-react-functional-components/

import { Box } from "@mui/material";
import Feature from "ol/Feature";
import Map from "ol/Map";
import { Geometry } from "ol/geom";
import { useEffect, useRef, useState } from "react";
import { createOpenLayersView } from "./view/open-layers.view";
import { createOpenLayersControls } from "./controls/open-layers.controls";
import { Layer, createLayers } from "./layers/open-layers.layers";

// not sure why that was so hard / thisisn't good though
import "node_modules/ol/ol.css";
import { createOpenLayersInteractions } from "./interactions/open-layers.interactions";
import { addOpenLayerEvent } from "./events/open-layers.events";
import {
	CreateProjectionType,
	createProjections,
	getCurrentProjection,
	setCurrentProjection,
} from "./projections/open-layers.projections";
import { useMap } from "./hooks/useMap";
import { baseLayers } from "./layers/open-layers.layers.mock";

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
	// const mapElement2 = useRef();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	const mapRef = useRef<any>();
	mapRef.current = map;

	// setCurrentProjection("EPSG:29901");

	useEffect(() => {
		// pass in array - prop
		createProjections([projectionDefinition]);
		// if projection then set projection - prop
		setCurrentProjection("EPSG:29901");
	}, []);

	const { map: initialMap, ref: mapElement } = useMap({
		// view: createOpenLayersView({
		// 	// center: [-1.1397207380041652, 52.63837630084822],
		// 	center: [0, 0],
		// 	projection: getCurrentProjection(),
		// }),
	});
	console.log({ initialMap });
	// Could be an initialise Map hook
	// returning map
	useEffect(() => {
		if (!initialMap) {
			return;
		}

		const view = createOpenLayersView({
			// center: [-1.1397207380041652, 52.63837630084822],
			center: [0, 0],
			projection: getCurrentProjection(),
		});

		initialMap.setView(view);

		// Argument to return layers and pass to useMap
		// Then can create/use a seperate cretae Layer?
		const layers = createLayers({
			map: initialMap,
			baseLayers: baseLayers as Layer[],
		});
		// setLayers replaces ny existing layers
		initialMap.setLayers(layers);
		// create Overlays

		// save map and vector layer references to state
		setMap(initialMap);

		// Add geoloacation to interactions / controls
		// Perhaps better as ba stand alone

		// These have to be added one by one unless at start
		createOpenLayersInteractions(initialMap, {});

		// /Have to be added one by one unless passed to constructor
		createOpenLayersControls(initialMap);

		addOpenLayerEvent(initialMap, []);

		return () => initialMap.setTarget(undefined);
	}, [initialMap]);

	return <Box ref={mapElement} width="95vw" height="95vh"></Box>;
};
