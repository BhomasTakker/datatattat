import GeoJSON from "ol/format/GeoJSON";
import { Layer } from "../../layers/open-layers.layers";
import { StyleLike } from "ol/style/Style";

type CreateOLLineLayerConfig = Omit<Layer, "layerId" | "sourceId"> & {
	style: StyleLike;
};

const defaultLayerOptions = {
	title: "DefaultPointMapLayer",
	visible: true,
};

const defaultSourceOptions = {
	format: new GeoJSON(),
	url: "./mock/rivers.geojson",
};

// At the moment all too similar to pointconfig
export const createOLLineLayerConfig = (options?: CreateOLLineLayerConfig) => {
	const { style, layerOptions, sourceOptions } = options || {};
	const layer = { ...defaultLayerOptions, ...layerOptions };
	const source = { ...defaultSourceOptions, ...sourceOptions };

	// const style = pointStyleFunction(pointStyle);
	return {
		layerId: "VectorLayer",
		layerOptions: { ...layer, style },
		sourceId: "Vector",
		sourceOptions: source,
	};
};
