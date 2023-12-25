import GeoJSON from "ol/format/GeoJSON";
import MVT from "ol/format/MVT";
import KML from "ol/format/KML";
// Suggests we make a thing for each
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import Image from "ol/style/Image";
import RegularShape from "ol/style/RegularShape";
import Icon from "ol/style/Icon";
import Text from "ol/style/Text";
import { Feature } from "ol";

const hammersArrow = (color: [number, number, number, number]) =>
	new RegularShape({
		fill: new Fill({ color: color }),
		stroke: new Stroke({ color: [0, 0, 0, 0.7] }),
		points: 3,
		rotation: 3.1416,
		radius: 10,
		// radius1: 15,
		// radius2: 5,
		scale: 1,
	});

const greenPolygonStyle = new Style({
	fill: new Fill({ color: [0, 256, 0, 1] }),
});
const redPolygonStyle = new Style({
	fill: new Fill({ color: [0, 256, 0, 1] }),
});
const redPointStyle = new Style({
	image: hammersArrow([256, 0, 0, 1]),
});
const bluePointStyle = new Style({
	image: hammersArrow([0, 0, 256, 1]),
});
const lineStringStyle = new Style({
	stroke: new Stroke({
		color: [256, 127, 0, 0.7],
		width: 5,
	}),
});

const exampleStyleFunction = (feature: Feature) => {
	console.log("HERE:1234");
	const featureGeometry = feature.getGeometry()?.getType();
	console.log("HERE:1234", { keys: feature.getKeys() });
	const featureName = feature.get("name");

	const textStyle = new Style({
		text: new Text({
			text: featureName,
			scale: 1.5,
			fill: new Fill({
				color: [20, 20, 20, 1],
			}),
			font: "bold 10px sans-serif",
		}),
	});

	if (featureGeometry === "Polygon") {
		const rank = feature.get("rank");
		console.log("HERE:1234", { rank });
		if (rank > 70) {
			feature.setStyle([greenPolygonStyle, textStyle]);
		} else {
			feature.setStyle([redPolygonStyle, textStyle]);
		}
	}
	if (featureGeometry === "Point") {
		const rank = feature.get("rank");
		console.log("HERE:1234", { rank });
		if (rank > 70) {
			feature.setStyle([redPointStyle, textStyle]);
		} else {
			feature.setStyle([bluePointStyle, textStyle]);
		}
	}
	if (featureGeometry === "LineString") {
		feature.setStyle([lineStringStyle]);
	}
};

export const baseLayers = [
	{
		layerId: "TileLayer",
		layerOptions: {
			title: "openStreetMapStandard",
			visible: true,
		},
		sourceId: "XYZ",
		sourceOptions: {
			url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
		},
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "googleMapsTerrain",
		},
		sourceId: "XYZ",
		sourceOptions: {
			url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
		},
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "usGovTopo",
		},
		sourceId: "XYZ",
		sourceOptions: {
			url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
		},
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "bing",
		},
		sourceId: "BingMaps",
		sourceOptions: {
			// How to do keys - if db data
			key: process.env.BING_MAPS_API_KEY,
			imagerySet: "AerialWithLabelsOnDemand",
		},
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "tileArcGISRest",
		},
		sourceId: "TileArcGISRest",
		sourceOptions: {
			attributions: "US Bureau of the Census: http://www.census.gov",
			url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
		},
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "tileWMS",
		},
		sourceId: "TileWMS",
		sourceOptions: {
			attributions: "NOAA/NOS/Office of Coast Survey ",
			url: "https://wrecks.nauticalcharts.noaa.gov/arcgis/services/public_wrecks/Wrecks_And_Obstructions/MapServer/WMSServer",
			params: {
				LAYERS: 1,
				FORMAT: "image/png",
				TRANSPARENT: true,
			},
		},
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "stadia",
		},
		sourceId: "StadiaMaps",
		sourceOptions: { layer: "stamen_watercolor" },
	},
	{
		layerId: "TileLayer",
		layerOptions: {
			visible: false,
			title: "debug",
		},
		sourceId: "TileDebug",
		sourceOptions: {},
	},
	{
		layerId: "VectorTileLayer",
		layerOptions: {
			visible: false,
			title: "VectorTile",
		},
		sourceId: "VectorTile",
		sourceOptions: {
			format: new MVT(),
			attributions: "Woop woop!",
			url:
				"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/" +
				"ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
			// url: `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=${process.env.MAP_BOX_API_KEY}`,
			// format: new MVT(),
			maxZoom: 14,
		},
	},
	{
		layerId: "VectorLayer",
		layerOptions: {
			visible: false,
			title: "Vector",
			///////// layer styling //////////
			style: new Style({
				fill: new Fill({ color: [255, 127, 127, 0.6] }),
				stroke: new Stroke({
					color: [0, 0, 0, 0.7],
					// width: ,
					lineDash: [3, 6],
				}),
				// image: new RegularShape({
				// 	fill: new Fill({ color: [256, 0, 0] }),
				// 	stroke: new Stroke({ color: [0, 0, 0, 0.7] }),
				// 	points: 3,
				// 	rotation: 3.1416,
				// 	radius: 10,
				// 	// radius1: 15,
				// 	// radius2: 5,
				// 	scale: 1,
				// }),
				image: new Icon({
					src: "./images/penis.png",
					scale: 0.5,
					color: [255, 192, 203, 1],
				}),
			}),
		},
		sourceId: "Vector",
		sourceOptions: {
			format: new GeoJSON(),
			url: "./mock/tanzania.geojson",
		},
	},
	{
		layerId: "VectorLayer",
		layerOptions: {
			visible: false,
			title: "VectorWithStyleFunction",
			///////// layer styling //////////
			style: exampleStyleFunction,
		},
		sourceId: "Vector",
		sourceOptions: {
			format: new GeoJSON(),
			url: "./mock/tanzania.geojson",
		},
	},
	{
		layerId: "VectorLayer",
		layerOptions: {
			visible: false,
			title: "Vector",
		},
		sourceId: "Vector",
		sourceOptions: {
			format: new KML(),
			url: "./mock/tanzania.kml",
		},
	},
	{
		layerId: "VectorImageLayer",
		layerOptions: {
			visible: false,
			title: "VectorImageLayer",
		},
		sourceId: "Vector",
		sourceOptions: {
			format: new GeoJSON(),
			url: "./mock/tanzania.geojson",
		},
	},
	{
		layerId: "HeatmapLayer",
		layerOptions: {
			visible: false,
			title: "HeatmapLayer",
			radius: 30,
			blur: 10,
			weight: "score",
			gradient: ["#56cdfc", "#fff", "#f7a8b8"],
		},
		sourceId: "Vector",
		sourceOptions: {
			format: new GeoJSON(),
			url: "./mock/tanzania.geojson",
		},
	},
	{
		layerId: "GraticuleLayer",
		layerOptions: {
			title: "GraticuleLayer",
			visible: false,
			showLabels: true,
			strokeStyle: new Stroke({
				color: "rgba(256, 1, 1, 0.7)",
				lineDash: [0.5, 3],
				width: 2,
			}),
		},
	},
	// Trouble with loading / using / park
	// All examples are async fetch data then create source
	// {
	// 	layerId: "TileLayer",
	// 	layerOptions: {
	// 		title: "IIIFLayer",
	// 		visible: true,
	// 	},
	// 	sourceId: "IIIF",
	// 	sourceOptions: {
	// 		size: [1000, 1000],
	// 		// zDirection: -1,
	// 		format: new GeoJSON(),
	// 		url: "https://iiif.ub.uni-leipzig.de/iiif/j2k/0000/0107/0000010732/00000072.jpx",
	// 		// url: "https://iiif.lib.harvard.edu/manifests/ids:26003933",
	// 	},
	// },
];
