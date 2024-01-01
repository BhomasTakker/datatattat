import FeatureFormat from "ol/format/Feature";
import { OpenLayersMap, OpenLayersMapProps } from "../open-layers";
import { createOLBaseMapConfig } from "../controllers/config/base/base-map.config";
import { createOLPointLayerConfig } from "../controllers/config/point.config";
import { Layer } from "../layers/open-layers.layers";
import { CreateShape } from "../style/style-shapes";
import { createPointStyleFunction } from "../style/style-function";

const defaultShape: CreateShape = {
	size: 10,
	type: "Circle",
};

// features OR src
// Need include map so we can overide etc? / pass in view, controls, etc with no fuss
export interface Point extends OpenLayersMapProps {
	size?: number;

	shapeMap: [];
	colorMap: [];
	sizeMap: [];

	shape?: CreateShape;
	// required if url used / alternative to use features
	// Though this is just a layer
	format: FeatureFormat;
	url: string;
}

export const Point = (options: Point) => {
	const {
		size = 10,
		format,
		url,
		// Use shape for a simple point map
		shape = defaultShape,
		// Use for multiple shapes colors, sizes, map to ids
		// We'll need to create a function
		shapeMap = [],
		colorMap = [],
		sizeMap = [],
		...rest
	} = options || {};

	const layerOptions = {
		title: "Example Title",
	};
	const sourceOptions = { format, url };

	// Vector point map?
	const config = createOLPointLayerConfig({
		layerOptions,
		sourceOptions,
		style: createPointStyleFunction({ shape }),
	});

	const mergedConfig = createOLBaseMapConfig({
		overlayLayers: [config as Layer],
	});

	return <OpenLayersMap {...mergedConfig} {...rest} />;
};
