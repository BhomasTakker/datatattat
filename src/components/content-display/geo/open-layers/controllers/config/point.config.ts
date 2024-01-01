import Style, { StyleLike } from "ol/style/Style";
import Circle from "ol/style/Circle";
import { Layer } from "../../layers/open-layers.layers";
import GeoJSON from "ol/format/GeoJSON";

import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

type CreateOLPointLayerConfig = Omit<Layer, "layerId" | "sourceId"> & {
	style: StyleLike;
};

const defaultLayerOptions = {
	title: "DefaultPointMapLayer",
	visible: true,
};

const defaultSourceOptions = {
	format: new GeoJSON(),
	url: "./mock/tanzania.geojson",
};

// Effectively make a bunch of overideable shapes
const simpleCircle = (color: [number, number, number, number]) =>
	new Circle({
		fill: new Fill({ color: color }),
		radius: 10,
		stroke: new Stroke({ color: [0, 0, 0, 0.7] }),
	});

const defaultPointStyle = new Style({
	image: simpleCircle([256, 0, 0, 1]),
});

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
