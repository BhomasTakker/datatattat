import Style from "ol/style/Style";
import { CreateShape, createShape } from "../style-shapes";
import {
	ColorMap,
	EmojiMap,
	IconMap,
	ShapeMap,
	SizeMap,
} from "../../filters/types";
import { ApplyProportionalSize } from "../apply-proprtional-size";
import { ApplyProportionalColor } from "../apply-proportional-color";
import { getStyleColor } from "../get-style-color";
import { getStyleSize } from "../get-style-size";
import { getStylePointType } from "../get-style-point-type";
import { createStyleText } from "../text/style-text";
import { getStyleText } from "../text/get-style-text";

// proportional size
// graduant color
type CreatePointStyle = {
	colorMap?: ColorMap;
	shapeMap?: ShapeMap;
	sizeMap?: SizeMap;
	iconMap?: IconMap;
	emojiMap?: EmojiMap;
	properties: {
		[x: string]: unknown;
	};
	shape: CreateShape;
};

export const createPointStyle = ({
	colorMap,
	shapeMap,
	sizeMap,
	iconMap,
	emojiMap,
	properties,
	shape,
}: CreatePointStyle) => {
	const proportionalSize: Omit<ApplyProportionalSize, "object"> = {
		key: "rank",
		minSize: 0,
		maxSize: 100,
		minValue: 0,
		maxValue: 100,
	};

	const proportionalColor: Omit<ApplyProportionalColor, "object"> = {
		key: "rank",
		gradientStart: [77, 77, 77, 1],
		gradientEnd: [188, 188, 188, 1],
		minValue: 0,
		maxValue: 100,
	};

	console.log({ proportionalSize });

	const {} = shape || {};

	// Fix me
	const newShape: CreateShape = {
		...shape,
		fillColor: getStyleColor({
			feature: properties,
			colorMap,
			proportionalColor,
			defaultColor: shape.fillColor,
		}),
		size: getStyleSize({
			feature: properties,
			sizeMap,
			proportionalSize,
			defaultSize: shape.size,
		}),
		// fillColor: proportionalColor, //newColor,
		// size: proportionalSize, //size
		...getStylePointType({
			feature: properties,
			shapeMap,
			iconMap,
			// emojiMap,
		}),
	};

	const text = getStyleText({ feature: properties, emojiMap });

	console.log({ TEXT: text });

	console.log({ newShape });

	const style = new Style({
		image: createShape(newShape),
		// text,
		text: text ? createStyleText(text) : undefined,
		// text: text ? createStyleEmoji({ code: text, scale: 5 }) : undefined,
	});

	return style;

	// End CreatePointStyle //////////////////////////////////////
	//////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
};
