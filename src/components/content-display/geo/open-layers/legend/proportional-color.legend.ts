import Legend from "ol-ext/legend/Legend";
import { ColorMap, StyleColor } from "../filters/types";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Fill, RegularShape, Style } from "ol/style";
import { ProprtionalColor } from "../types/open-layers.types";

const createGradient = (gradientStart: StyleColor, gradientEnd: StyleColor) => {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	if (!ctx) {
		return [0, 0, 0, 0]; //blank color
	}
	// can be more detailed and specify more colors and gradient proportions, etc
	const grd = ctx.createLinearGradient(-25, 0, 25, 0);
	grd.addColorStop(0, `rgba(${gradientStart.join(",")})`);
	grd.addColorStop(1, `rgba(${gradientEnd.join(",")})`);

	return grd;
};

// create Map Items
export const createProportionalColorLegend = ({
	key,
	minValue,
	maxValue,
	gradientStart,
	gradientEnd,
}: ProprtionalColor) => {
	const colorMapLegend = new Legend({ margin: 4 });

	const item: olLegendItemOptions = {
		// Force to string but really?
		title: `${minValue} - ${maxValue}`,
		typeGeom: "Point",
		style: new Style({
			image: new RegularShape({
				points: 4,
				radius: 30 / Math.SQRT2,
				radius2: 30,
				scale: [1, 0.5],
				fill: new Fill({ color: createGradient(gradientStart, gradientEnd) }),
				// stroke: new Stroke({ color: [255, 128, 0, 1], width: 1.5 }),
				angle: 0,
			}),
		}),
	};

	colorMapLegend.addItem(item as olLegendItemOptions);

	return colorMapLegend;
};
