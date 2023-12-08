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
import { useEffect, useRef, useState } from "react";
import VectorImageLayer from "ol/layer/VectorImage";
import Vector from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { OpenLayersMock } from "./open-layers.mock";
import data from "./map.geojson";

// Need to understand, update, and expand
// But the basics are here

// Need to add max zoom etc

interface OpenLayersMapProps {
	features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
}

// We need to add a controls panel left/top etc
// key layer, etc?
// i.e. layers selector - https://www.youtube.com/watch?v=k4b3nqDHCIU&list=PLSWT7gmk_6LrvfkAFzfBpNckEsaF7S2GB&index=7
export const OpenLayersMap = ({ features }: OpenLayersMapProps) => {
	const [map, setMap] = useState();
	const [featuresLayer, setFeaturesLayer] = useState();
	const [selectedCoord, setSelectedCoord] = useState();

	// pull refs
	const mapElement = useRef();

	// create state ref that can be accessed in OpenLayers onclick callback function
	//  https://stackoverflow.com/a/60643670
	const mapRef = useRef();
	mapRef.current = map;

	// Could be an initialise Map hook
	useEffect(() => {
		// create and add vector source layer
		// What is this?
		// Looks like it is a 'drawing' layer
		const initalFeaturesLayer = new VectorLayer({
			source: new VectorSource(),
		});

		const center = transform(
			[-1.1397207380041652, 52.63837630084822],
			"EPSG:4326",
			"EPSG:3857"
		);

		// What other Map options are there?
		const initialMap = new Map({
			target: mapElement.current,
			// Create a layers component to return your layers
			layers: [
				// Open street map standard
				// new TileLayer({
				// 	source: new XYZ({
				// 		url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
				// 	}),
				// }),
				/*// USGS Topo
				new TileLayer({
					source: new XYZ({
						url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
					}),
				}),

				// Google Maps Terrain
				new TileLayer({
					source: new XYZ({
						url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
					}),
				}),*/

				// This needs to be OVER base group
				initalFeaturesLayer,
			],
			// Create a View CreateView function. 'Component' with all options available as parameters
			view: new View({
				center: center,
				zoom: 8,
				maxZoom: 20,
				minZoom: 2,
			}),
			controls: [],
		});

		const openStreetMapStandard = new TileLayer({
			source: new XYZ({
				url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
			}),
			visible: true,
		});

		const googleMapsTerrain = new TileLayer({
			source: new XYZ({
				url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
			}),
			visible: false,
		});

		// USGS Topo
		const usGovTopo = new TileLayer({
			source: new XYZ({
				url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
			}),
			visible: false,
		});

		const baseLayerGroup = new GroupLayer({
			layers: [openStreetMapStandard, googleMapsTerrain, usGovTopo],
		});

		initialMap.addLayer(baseLayerGroup);

		const midlandsRumble = new VectorLayer({
			source: new VectorSource({
				url: "/map.geojson",
				format: new GeoJSON(),
				// features: new GeoJSON().readFeatures(OpenLayersMock),
			}),
			visible: true,
		});

		// const vecs = new VectorSource({
		// 	// url: "/open-layers.mock.geojson",
		// 	// format: new GeoJSON(),
		// 	features: new GeoJSON().readFeatures(OpenLayersMock),
		// });

		initialMap.addLayer(midlandsRumble);

		// set map onclick handler
		initialMap.on("click", handleMapClick);

		// save map and vector layer references to state
		setMap(initialMap);
		setFeaturesLayer(initalFeaturesLayer);

		return () => initialMap.setTarget(undefined);
	}, []);

	// update map if features prop changes - logic formerly put into componentDidUpdate
	useEffect(() => {
		if (features?.length) {
			// may be null on first render

			// set features to map
			featuresLayer.setSource(
				new VectorSource({
					features: features, // make sure features is an array
				})
			);

			// fit map to feature extent (with 100px of padding)
			map.getView().fit(featuresLayer.getSource().getExtent(), {
				padding: [100, 100, 100, 100],
			});
		}
	}, [features]);

	const handleMapClick = (event) => {
		// get clicked coordinate using mapRef to access current React state inside OpenLayers callback
		//  https://stackoverflow.com/a/60643670
		const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

		// transform coord to EPSG 4326 standard Lat Long
		const transormedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");

		// set React state
		setSelectedCoord(transormedCoord);

		console.log(transormedCoord);
	};

	return <Box ref={mapElement} width="95vw" height="95vh"></Box>;
};
