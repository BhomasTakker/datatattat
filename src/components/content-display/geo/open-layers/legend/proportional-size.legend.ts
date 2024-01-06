import Legend from "ol-ext/legend/Legend";
import { StyleColor } from "../filters/types";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Fill, RegularShape, Style } from "ol/style";
import { ProportionalSize, ProprtionalColor } from "../types/open-layers.types";

// create Map Items
export const createProportionalSizeLegend = ({
	key,
	minValue,
	maxValue,
	minSize,
	maxSize,
}: ProportionalSize) => {
	const proportionalSizeLegend = new Legend({
		// Need tie this in to maxSize
		margin: 20,
		size: [maxSize, maxSize],
	});

	// proportionalSizeLegend.addItem({ title: `Proportional Size` });
	// colorMapLegend.addItem({ title: "" });
	console.log("proportional", {
		key,
		minValue,
		maxValue,
		minSize,
		maxSize,
	});
	const small: olLegendItemOptions = {
		// Force to string but really?
		title: `${maxSize / 2}`,
		typeGeom: "Point",
		style: new Style({
			image: new RegularShape({
				points: 4,
				radius: maxSize / 2,
				fill: new Fill({ color: [0, 0, 0, 0.5] }),
				angle: Math.PI / 4,
			}),
		}),
	};

	const large: olLegendItemOptions = {
		// Force to string but really?
		title: `max - ${maxValue}`,
		typeGeom: "Point",
		style: new Style({
			image: new RegularShape({
				points: 4,
				radius: maxSize,
				fill: new Fill({ color: [0, 0, 0, 0.5] }),
				angle: Math.PI / 4,
			}),
		}),
	};

	proportionalSizeLegend.addItem(small as olLegendItemOptions);
	proportionalSizeLegend.addItem(large as olLegendItemOptions);
	return proportionalSizeLegend;
};
