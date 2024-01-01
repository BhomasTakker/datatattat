import GeoJSON from "ol/format/GeoJSON";
import { Layer } from "../../layers/open-layers.layers";

// This would be via geojson data or given format
// This means we can provide the geojson data from an api etc
// We would need teo + of these or variations?

// Call get/create config with data / return
// create view with given data
// create interactions and contrls with given data
// Create Layers and base layers with given data

// Probs not here but / create layer? / would be vector layer etc etc

const defaultLayerOptions = {
	title: "HeatmapLayer",
	visible: true,
	radius: 15,
	blur: 30,
	weight: "score",
	gradient: ["#E40303", "#FF8C00", "#FFED00", "#008026", "#004DFF", "#750787"],
};

const defaultSourceOptions = {
	format: new GeoJSON(),
	url: "./mock/tanzania.geojson",
};
// If you are creating a Heatmap layer
// Then all you NEED to pass is radius, blur, weight, gradient, format, and source
// And then format and source are the only ones that can't be given defaults with certainty
// weight, jesus christ, weight
export const createHeatmapLayerConfig = (options?: Layer): Layer => {
	const {
		layerId = "HeatmapLayer",
		layerOptions = {},
		sourceId = "Vector",
		sourceOptions = {},
	} = options || {};

	const layer = { ...defaultLayerOptions, ...layerOptions };
	const source = { ...defaultSourceOptions, ...sourceOptions };
	return {
		layerId,
		layerOptions: layer,
		sourceId,
		sourceOptions: source,
	};
};
