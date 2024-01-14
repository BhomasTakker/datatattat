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
	ProportionalSize,
} from "../../types/open-layers.types";
import { createLegendControl } from "../../legend/ol-ext-legend";
import { GetLayerSourceOptions } from "../../layers/sources/open-layers.sources";

const defaultShape: CreateShape = {
	size: 10,
	type: "Circle",
};

// features OR src
// Need include map so we can overide etc? / pass in view, controls, etc with no fuss
export interface Point extends OpenLayersMapProps {
	// we can add features here but we should probably be passing in sourceObject or higher
	size?: number;
	shape?: CreateShape;
	filters: Filter[] | undefined;
	shapeMap: ShapeMap | undefined;
	colorMap: ColorMap | undefined;
	sizeMap: SizeMap | undefined;
	iconMap: IconMap | undefined;
	emojiMap: EmojiMap | undefined;
	proportionalColor: ProprtionalColor | undefined;
	proportionalSize: ProportionalSize | undefined;

	////////////
	sourceOptions: GetLayerSourceOptions;
}

// You can create a withComponent to deal with the
// Or just wrap and update features in that
// i.e. wrap me in a FeaturesData component

// Argument that thisa is doing too much
// We can have proportional symbol etc as a specific variant
export const Point = (options: Point) => {
	const {
		size = 10,

		sourceOptions,
		// format and url are really on a per source/layer basis same as features
		// should use/expect as such?
		// Or we are assuming / stipulating that this point will only have one layer.
		// We need to create a multi layer thing
		// Replace with a source options & layerOptions / and replace in all other maps
		////////////////////////////////////////
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
	// this needs a creation surely (I think we are falling back on defaults here too)
	// const sourceOptions = { features, format, url };

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

	const legend = createLegendControl({
		colorMap,
		proportionalColor,
		sizeMap,
		proportionalSize,
		shapeMap,
		iconMap,
		emojiMap,
	});

	return <OpenLayersMap {...mergedConfig} legend={legend} {...rest} />;
};
