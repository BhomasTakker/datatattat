// @ts-nocheck / FIX MEimport Style from "ol/style/Style";
import { CreateShape, createShape } from "../style-shapes";
import {
	ColorMap,
	EmojiMap,
	IconMap,
	ShapeMap,
	SizeMap,
} from "../../filters/types";
import { getStyleColor } from "../get-style-color";
import { getStyleSize } from "../get-style-size";
import { getStylePointType } from "../get-style-point-type";
import { createStyleText } from "../text/style-text";
import { getStyleText } from "../text/get-style-text";
import {
	ProprtionalColor,
	ProportionalSize,
} from "../../types/open-layers.types";
import { Style } from "ol/style";

// proportional size
// graduant color
type CreatePointStyle = {
	colorMap?: ColorMap;
	shapeMap?: ShapeMap;
	sizeMap?: SizeMap;
	iconMap?: IconMap;
	emojiMap?: EmojiMap;
	proportionalColor?: ProprtionalColor;
	proportionalSize?: ProportionalSize;
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
	proportionalColor,
	proportionalSize,
	shape,
}: CreatePointStyle) => {
	const {} = shape || {};

	// Should be if text return text else return shape

	// Fix me
	const newShape: CreateShape = {
		...shape,
		fillColor: getStyleColor({
			feature: properties,
			colorMap,
			proportionalColor,
			defaultColor: shape.fillColor,
		}),
		// prob need an if
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

	// At the moment no text AND shape
	const style = new Style({
		image: !text ? createShape(newShape) : undefined,
		// text,
		text: text ? createStyleText(text) : undefined,
		// text: text ? createStyleEmoji({ code: text, scale: 5 }) : undefined,
	});

	return style;

	// End CreatePointStyle //////////////////////////////////////
	//////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
};
