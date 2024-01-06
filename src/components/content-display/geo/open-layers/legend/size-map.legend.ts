import Legend from "ol-ext/legend/Legend";
import { SizeMap } from "../filters/types";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Fill, RegularShape, Style } from "ol/style";

// create Map Items
export const createSizeMapLegend = ({ filter, map }: SizeMap) => {
	// Again margin needs to grow with maxSize
	const colorMapLegend = new Legend({ margin: 10 });
	colorMapLegend.addItem({ title: `Color Map - ${filter}` });

	map.forEach(({ value, size }) => {
		const item: olLegendItemOptions = {
			// Force to string but really?
			title: value.toString(),
			typeGeom: "Point",
			style: new Style({
				image: new RegularShape({
					points: 4,
					radius: size,
					// Really need a default color
					fill: new Fill({ color: [0, 0, 0, 1] }),
					// stroke: new Stroke({ color: [255, 128, 0, 1], width: 1.5 }),
					angle: Math.PI / 4,
				}),
			}),
		};

		colorMapLegend.addItem(item as olLegendItemOptions);
	});

	return colorMapLegend;
};
