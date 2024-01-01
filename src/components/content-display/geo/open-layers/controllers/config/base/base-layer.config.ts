import { Layer, Layers } from "../../../layers/open-layers.layers";

export type CreateBaseLayerOptions = {} & Layer;

const defaultLayerOptions = {
	title: "OpenStreetMapStandard",
	visible: true,
};

const defaultSourceOptions = {
	// Then here get from a real config
	url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
};

// Do something like this then can use as a base for all
//
export const createBaseLayerConfig = (
	options?: CreateBaseLayerOptions
): Layer => {
	const {
		layerId = "TileLayer",
		layerOptions = {},
		sourceId = "XYZ",
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
