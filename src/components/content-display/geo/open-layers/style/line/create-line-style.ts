import Style from "ol/style/Style";
import { ColorMap, SizeMap, StyleColor } from "../../filters/types";
import {
	ProprtionalColor,
	ProportionalSize,
} from "../../types/open-layers.types";
import Fill from "ol/style/Fill";
import { getStyleColor } from "../get-style-color";
import Stroke from "ol/style/Stroke";
import { getStyleSize } from "../get-style-size";

type LineDash = "butt" | "round" | "square";
type LineJoin = "bevel" | "round" | "miter";

type CreateLineStyle = {
	colorMap?: ColorMap;
	sizeMap?: SizeMap;
	proportionalColor?: ProprtionalColor;
	proportionalSize?: ProportionalSize;
	properties: {
		[x: string]: unknown;
	};
	defaultColor?: StyleColor;
	defaultSize?: number;
	//////////
	lineCap?: LineDash;
	lineJoin?: LineJoin;
	lineDash?: number[] | undefined;
	lineDashOffset?: number;
	miterLimit?: number;
};

export const createLineStyle = ({
	colorMap,
	sizeMap,
	proportionalColor,
	proportionalSize,
	properties,
	defaultColor = [0, 0, 0, 1],
	defaultSize = 2,
	// rest
	lineCap = "round",
	lineJoin = "round",
	lineDash = undefined,
	lineDashOffset = 0,
	miterLimit = 10,
}: CreateLineStyle) => {
	// maybe text?
	const lineColor = getStyleColor({
		feature: properties,
		colorMap,
		proportionalColor,
		defaultColor,
	});
	const lineSize = getStyleSize({
		feature: properties,
		sizeMap,
		proportionalSize,
		defaultSize,
	});

	// console.log({ lineColor, lineSize });
	const style = new Style({
		// fill: new Fill({ color: fillColor }),
		stroke: new Stroke({ color: lineColor, width: lineSize }),
	});

	return style;
};
