// https://taylor.callsen.me/using-openlayers-with-react-functional-components/

import { Box } from "@mui/material";
import Collection from "ol/Collection";
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import { Geometry } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import GroupLayer from "ol/layer/Group";
import VectorLayer from "ol/layer/Vector";
import { transform } from "ol/proj";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import GeoJSON from "ol/format/GeoJSON";
import { OpenLayersMock } from "./open-layers.mock";
import data from "./map.json";
import { createOpenLayersView } from "./view/open-layers.view";
import { createOpenLayersControls } from "./controls/open-layers.controls";
import { createGroupLayer, createTileLayer } from "./layers/open-layers.layers";
import { Coordinate } from "ol/coordinate";

// Need to understand, update, and expand
// But the basics are here

// Need to add max zoom etc

interface OpenLayersMapProps {
	// features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
	features: Feature<Geometry>[] | undefined;
}

// We need to add a controls panel left/top etc
// key layer, etc?
// i.e. layers selector - https://www.youtube.com/watch?v=k4b3nqDHCIU&list=PLSWT7gmk_6LrvfkAFzfBpNckEsaF7S2GB&index=7
export const OpenLayersMap = ({ features }: OpenLayersMapProps) => {
	const [map, setMap] = useState<Map | undefined>();
	const [featuresLayer, setFeaturesLayer] =
		useState<VectorLayer<VectorSource<Feature<Geometry>>>>();
	const [selectedCoord, setSelectedCoord] = useState<Coordinate | undefined>();

	// pull refs
	const mapElement = useRef();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	const mapRef = useRef<any>();
	mapRef.current = map;

	// Could be an initialise Map hook
	useEffect(() => {
		// create and add vector source layer
		// What is this?
		// Looks like it is a 'drawing' layer
		const initalFeaturesLayer = new VectorLayer({
			source: new VectorSource(),
		});

		const initialMap = new Map({
			target: mapElement.current,
			layers: [
				// This needs to be OVER base group
				initalFeaturesLayer,
			],
			view: createOpenLayersView({
				center: [-1.1397207380041652, 52.63837630084822],
			}),
			controls: createOpenLayersControls(),
		});

		// create from given data
		const openStreetMapStandard = createTileLayer({
			url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
		});

		const googleMapsTerrain = createTileLayer({
			url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
			visible: false,
		});

		// USGS Topo
		const usGovTopo = createTileLayer({
			url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
			visible: false,
		});

		const baseLayerGroup = createGroupLayer([
			openStreetMapStandard,
			googleMapsTerrain,
			usGovTopo,
		]);

		initialMap.addLayer(baseLayerGroup);

		// set map onclick handler
		initialMap.on("click", handleMapClick);

		// save map and vector layer references to state
		setMap(initialMap);
		// setFeaturesLayer(initalFeaturesLayer);

		return () => initialMap.setTarget(undefined);
	}, []);

	// useFeaturesSource or something
	useEffect(() => {
		if (features?.length) {
			// may be null on first render

			// The early returns here were to fix ts issues
			// They may, technically not be okay
			if (!featuresLayer) {
				return;
			}

			if (!map) {
				return;
			}

			// set features to map
			featuresLayer.setSource(
				new VectorSource({
					features: features, // make sure features is an array
				})
			);

			// Might need something in place of featuresSource.getExtent() in case of undefined
			const featuresSource = featuresLayer.getSource();
			if (!featuresSource) {
				return;
			}

			// fit map to feature extent (with 100px of padding)
			map.getView().fit(featuresSource.getExtent(), {
				padding: [100, 100, 100, 100],
			});
		}
	}, [features]);

	// We don't need this now/yet
	const handleMapClick = (event: any) => {
		// get clicked coordinate using mapRef to access current React state inside OpenLayers callback
		//  https://stackoverflow.com/a/60643670
		const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

		// transform coord to EPSG 4326 standard Lat Long
		const transormedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");

		// set React state
		setSelectedCoord(transormedCoord);

		console.log(transormedCoord);
	};

	return (
		<Box
			ref={mapElement}
			width="95vw"
			height="95vh"
			// margin={0}
			// padding={0}
		></Box>
	);
};
