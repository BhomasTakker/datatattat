// @ts-nocheck / FIX ME
import { ColorMap, StyleColor } from "../filters/types";
import { ApplyColorMap, applyColorMap } from "./apply-color-map";
import {
	ApplyProportionalColor,
	applyProportionalColor,
} from "./apply-proportional-color";

type GetStyleColor = {
	feature: { [x: string]: unknown };
	colorMap?: ColorMap;
	proportionalColor?: Omit<ApplyProportionalColor, "object">;
	defaultColor?: StyleColor;
};

export const getStyleColor = ({
	feature,
	colorMap,
	proportionalColor,
	defaultColor,
}: GetStyleColor) => {
	switch (true) {
		case !!proportionalColor:
			return applyProportionalColor({ ...proportionalColor, object: feature }); //pass in feature
		case !!colorMap:
			return applyColorMap({ colorMap, object: feature }); //pass in feature/object
		default:
			return defaultColor;
	}
};
