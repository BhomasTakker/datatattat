import Feature from "ol/Feature";
import Style from "ol/style/Style";
import { CreateShape, createShape } from "./style-shapes";
import { applyFilters } from "../filters/apply-filters";
import {
	ColorMap,
	EmojiMap,
	Filter,
	IconMap,
	ShapeMap,
	SizeMap,
} from "../filters/types";
import { createPointStyle } from "./points/create-point-style";
import {
	Geometry,
	ProprtionalColor,
	ProportionalSize,
} from "../types/open-layers.types";
import { filterFeature } from "./utils";

const defaultShape: CreateShape = {
	size: 10,
	type: "Circle",
};

const defaultPointStyle = new Style({
	image: createShape(defaultShape),
});

type CreatePointsStyleFunction = {
	// icon, image, etc? same thing just rename
	shape: CreateShape;
	filters: Filter[];
	colorMap: ColorMap | undefined;
	sizeMap: SizeMap | undefined;
	shapeMap: ShapeMap | undefined;
	iconMap: IconMap | undefined;
	emojiMap: EmojiMap | undefined;
	proportionalColor: ProprtionalColor | undefined;
	proportionalSize: ProportionalSize | undefined;
};

// At the moment this is doing more than style
// We're filtering and applying the style only if
export const createPointStyleFunction =
	({
		shape,
		filters = [],
		// use ...rest
		colorMap,
		sizeMap,
		shapeMap,
		iconMap,
		emojiMap,
		proportionalColor,
		proportionalSize,
	}: CreatePointsStyleFunction) =>
	(feature: Feature) => {
		if (!filterFeature(feature, "Point")) {
			return;
		}

		const properties = feature.getProperties();
		console.log({ properties });
		// This will all NOT be performant
		// For large datasets you want to look at webGL layers
		// filter, filter2
		if (!applyFilters({ filters, object: properties })) {
			return;
		}

		const style = createPointStyle({
			shape,
			properties,
			colorMap,
			// colorMap: colorMapGT,
			sizeMap,
			// sizeMap: sizeMap2,
			shapeMap,
			iconMap,
			emojiMap,
			proportionalColor,
			proportionalSize,
		});
		// argument would be to not do this here but to return the style
		feature.setStyle([style || defaultPointStyle]);
	};
