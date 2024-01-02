import Style from "ol/style/Style";
import { ColorMap, StyleColor } from "../../filters/types";
import { ProprtionalColor } from "../../types/open-layers.types";
import Fill from "ol/style/Fill";
import { getStyleColor } from "../get-style-color";

type CreatePolygonStyle = {
	colorMap?: ColorMap;
	proportionalColor?: ProprtionalColor;
	properties: {
		[x: string]: unknown;
	};
	defaultColor?: StyleColor;
};

export const createPolygonStyle = ({
	colorMap,
	proportionalColor,
	properties,
	defaultColor = [0, 0, 0, 0],
}: CreatePolygonStyle) => {
	// maybe text?
	const fillColor = getStyleColor({
		feature: properties,
		colorMap,
		proportionalColor,
		defaultColor,
	});
	const style = new Style({
		fill: new Fill({ color: fillColor }),
	});

	return style;
};
