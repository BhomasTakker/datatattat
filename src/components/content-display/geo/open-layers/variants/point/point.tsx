import FeatureFormat from "ol/format/Feature";
import { OpenLayersMap, OpenLayersMapProps } from "../../open-layers";
import { createOLBaseMapConfig } from "../../controllers/config/base/base-map.config";
import { createOLPointLayerConfig } from "../../controllers/config/point.config";
import { Layer } from "../../layers/open-layers.layers";
import { CreateShape } from "../../style/style-shapes";
import { createPointStyleFunction } from "../../style/style-function";
import { StyleFunction } from "ol/style/Style";
import {
	ColorMap,
	EmojiMap,
	Filter,
	IconMap,
	ShapeMap,
	SizeMap,
} from "../../filters/types";
import {
	ProprtionalColor,
	ProprtionalSize,
} from "../../types/open-layers.types";

const defaultShape: CreateShape = {
	size: 10,
	type: "Circle",
};

// features OR src
// Need include map so we can overide etc? / pass in view, controls, etc with no fuss
export interface Point extends OpenLayersMapProps {
	size?: number;
	shape?: CreateShape;
	filters: Filter[] | undefined;
	shapeMap: ShapeMap | undefined;
	colorMap: ColorMap | undefined;
	sizeMap: SizeMap | undefined;
	iconMap: IconMap | undefined;
	emojiMap: EmojiMap | undefined;
	proportionalColor: ProprtionalColor | undefined;
	proportionalSize: ProprtionalSize | undefined;
	// required if url used / alternative to use features
	// Though this is just a layer
	format: FeatureFormat;
	url: string;
}

// Argument that thisa is doing too much
// We can have proportional symbol etc as a specific variant
export const Point = (options: Point) => {
	const {
		size = 10,
		format,
		url,
		// Use shape for a simple point map
		shape = defaultShape,
		// Use for multiple shapes colors, sizes, map to ids
		// We'll need to create a function
		filters = [],
		shapeMap,
		colorMap,
		sizeMap,
		iconMap,
		emojiMap,
		proportionalColor,
		proportionalSize,
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
		style: createPointStyleFunction({
			shape,
			filters,
			colorMap,
			sizeMap,
			shapeMap,
			iconMap,
			emojiMap,
			proportionalColor,
			proportionalSize,
		}) as StyleFunction,
	});

	const mergedConfig = createOLBaseMapConfig({
		overlayLayers: [config as Layer],
	});

	return <OpenLayersMap {...mergedConfig} {...rest} />;
};
