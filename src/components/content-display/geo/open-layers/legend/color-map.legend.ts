import Legend from "ol-ext/legend/Legend";
import { ColorMap } from "../filters/types";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Fill, RegularShape, Style } from "ol/style";

// create Map Items
export const createColorMapLegend = ({ filter, map }: ColorMap) => {
	const colorMapLegend = new Legend({ margin: 4 });
	colorMapLegend.addItem({ title: `Color Map - ${filter}` });

	map.forEach(({ value, color, ...rest }) => {
		const item: olLegendItemOptions = {
			// Force to string but really?
			title: value.toString(),
			typeGeom: "Point",
			style: new Style({
				image: new RegularShape({
					points: 4,
					radius: 10,
					fill: new Fill({ color }),
					// stroke: new Stroke({ color: [255, 128, 0, 1], width: 1.5 }),
					angle: Math.PI / 4,
				}),
			}),
		};

		colorMapLegend.addItem(item as olLegendItemOptions);
	});

	return colorMapLegend;
};
