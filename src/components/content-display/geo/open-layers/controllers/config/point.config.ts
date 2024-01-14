import { StyleLike } from "ol/style/Style";
import { Layer } from "../../layers/open-layers.layers";
import GeoJSON from "ol/format/GeoJSON";

type CreateOLPointLayerConfig = Omit<Layer, "layerId" | "sourceId"> & {
	style: StyleLike;
};

const defaultLayerOptions = {
	title: "DefaultPointMapLayer",
	visible: true,
};

// if features no url etc
// (p.s. You can use features AND url-format)
const defaultSourceOptions = {
	// format: new GeoJSON(),
	// url: "./mock/tanzania.geojson",
};

export const createOLPointLayerConfig = (
	options?: CreateOLPointLayerConfig
) => {
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
