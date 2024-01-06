import Legend from "ol-ext/legend/Legend";
import { ShapeMap } from "../filters/types";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Fill, RegularShape, Style } from "ol/style";
import { createShape } from "../style/style-shapes";

// create Map Items
export const createShapeMapLegend = ({ filter, map }: ShapeMap) => {
	// Again margin needs to grow with maxSize
	const shapeMapLegend = new Legend({ margin: 10 });
	shapeMapLegend.addItem({ title: `Shape Map` });

	map.forEach(({ value, shape }) => {
		const item: olLegendItemOptions = {
			// Force to string but really?
			title: value.toString(),
			typeGeom: "Point",
			style: new Style({
				image: createShape({ type: shape }),
			}),
		};

		shapeMapLegend.addItem(item as olLegendItemOptions);
	});

	return shapeMapLegend;
};
