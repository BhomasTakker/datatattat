import Legend from "ol-ext/legend/Legend";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Fill, RegularShape, Style } from "ol/style";

// utils - different type of gradient
const createGradient = (gradient: `#${string}`[]) => {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	if (!ctx) {
		return [0, 0, 0, 0]; //blank color
	}
	// can be more detailed and specify more colors and gradient proportions, etc
	const grd = ctx.createLinearGradient(-25, 0, 25, 0);
	gradient.forEach((color, i) => {
		const stop = i / gradient.length || 0;
		grd.addColorStop(stop, color);
	});

	return grd;
};

export type CreateHeatmapLegend = {
	weight?: string;
	radius?: number;
	blur?: number;
	gradient?: `#${string}`[];
};
// create Map Items
export const createHeatmapLegend = ({
	weight,
	radius,
	blur,
	// get and share from somewhewre dammit!
	gradient = ["#E40303", "#FF8C00", "#FFED00", "#008026", "#004DFF", "#750787"],
}: CreateHeatmapLegend) => {
	const colorMapLegend = new Legend({ margin: 4, title: weight });

	console.log("heatmap ", { gradient, weight, radius, blur });

	// gradient.forEach((color, i) => {
	// 	const title = i == 0 ? "Low" : i == gradient.length - 1 ? "High" : "";
	// 	const item: olLegendItemOptions = {
	// 		// Force to string but really?
	// 		title: title,
	// 		typeGeom: "Point",
	// 		style: new Style({
	// 			image: new Circle({
	// 				radius: 25,
	// 				fill: new Fill({ color: color }),
	// 			}),
	// 		}),
	// 	};

	// 	colorMapLegend.addItem(item as olLegendItemOptions);
	// });

	const item: olLegendItemOptions = {
		// Force to string but really?
		title: "low / high",
		typeGeom: "Point",
		style: new Style({
			image: new RegularShape({
				points: 4,
				radius: 30 / Math.SQRT2,
				radius2: 30,
				scale: [1, 0.5],
				fill: new Fill({ color: createGradient(gradient) }),
				angle: 0,
			}),
		}),
	};
	colorMapLegend.addItem(item);
	return colorMapLegend;
};
