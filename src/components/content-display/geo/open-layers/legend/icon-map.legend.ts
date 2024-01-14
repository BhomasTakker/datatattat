import { IconMap } from "../filters/types";
import Legend from "ol-ext/legend/Legend";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Style } from "ol/style";
import { createShape } from "../style/style-shapes";
// create Map Items
export const createIconMapLegend = ({ filter, map }: IconMap) => {
	// Again margin needs to grow with maxSize
	const iconMapLegend = new Legend({ margin: 10 });
	iconMapLegend.addItem({ title: `Icon Map` });

	map.forEach(({ value, shape, key, size, src }) => {
		const item: olLegendItemOptions = {
			// Force to string but really?
			title: value.toString(),
			typeGeom: "Point",
			style: new Style({
				image: createShape({ type: shape, src, size: 25 }),
			}),
		};

		iconMapLegend.addItem(item as olLegendItemOptions);
	});

	return iconMapLegend;
};
