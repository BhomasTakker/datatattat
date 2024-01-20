import Legend from "ol-ext/legend/Legend";
import LegendControl from "ol-ext/control/Legend";
import {
	ColorMap,
	EmojiMap,
	IconMap,
	ShapeMap,
	SizeMap,
} from "../filters/types";
import { ProportionalSize, ProprtionalColor } from "../types/open-layers.types";
import LegendItem from "ol-ext/legend/Item";
import { createColorMapLegend } from "./color-map.legend";
import { createProportionalColorLegend } from "./proportional-color.legend";
import { createSizeMapLegend } from "./size-map.legend";
import { createProportionalSizeLegend } from "./proportional-size.legend";
import { createShapeMapLegend } from "./shape-map.legend";
import { createIconMapLegend } from "./icon-map.legend";
import { createEmojiMapLegend } from "./emoji-map.legend";
import { CreateHeatmapLegend, createHeatmapLegend } from "./heatmap.legend";

export interface CreateLegendControl {
	colorMap?: ColorMap;
	proportionalColor?: ProprtionalColor;
	sizeMap?: SizeMap;
	proportionalSize?: ProportionalSize;
	shapeMap?: ShapeMap;
	iconMap?: IconMap;
	emojiMap?: EmojiMap;
	heatmap?: CreateHeatmapLegend;
}

// export interface CreateColorMapItems {
// 	colorMap: ColorMap;
// }
// Ultimately we may want to completely override this control, i.e. create our own
// You can associate a legend with a layer and remove it when the layer is invisible.
export const createLegendControl = ({
	colorMap,
	proportionalColor,
	sizeMap,
	proportionalSize,
	shapeMap,
	iconMap,
	emojiMap,
	heatmap,
}: CreateLegendControl) => {
	const legend = new Legend({
		title: "Legend",
		// margin: 5,
		// maxWidth: 300,
	});
	const legendCtrl = new LegendControl({
		legend: legend,
		collapsed: false,
	});

	// need if noything then don't

	colorMap &&
		legend.addItem(createColorMapLegend(colorMap) as unknown as LegendItem);
	proportionalColor &&
		legend.addItem(
			createProportionalColorLegend(proportionalColor) as unknown as LegendItem
		);

	sizeMap &&
		legend.addItem(createSizeMapLegend(sizeMap) as unknown as LegendItem);
	proportionalSize &&
		legend.addItem(
			createProportionalSizeLegend(proportionalSize) as unknown as LegendItem
		);

	shapeMap &&
		legend.addItem(createShapeMapLegend(shapeMap) as unknown as LegendItem);
	iconMap &&
		legend.addItem(createIconMapLegend(iconMap) as unknown as LegendItem);
	emojiMap &&
		legend.addItem(createEmojiMapLegend(emojiMap) as unknown as LegendItem);

	heatmap &&
		legend.addItem(createHeatmapLegend(heatmap) as unknown as LegendItem);

	return legend.getItems().getLength() ? legendCtrl : undefined;
};
