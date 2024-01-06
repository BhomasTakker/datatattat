import Feature from "ol/Feature";
import { filterFeature } from "../utils";
import { applyFilters } from "../../filters/apply-filters";
import { ColorMap, Filter, SizeMap } from "../../filters/types";
import {
	ProprtionalColor,
	ProportionalSize,
} from "../../types/open-layers.types";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import { createLineStyle } from "./create-line-style";

type CreateLineStyleFunction = {
	filters: Filter[];
	colorMap: ColorMap | undefined;
	sizeMap: SizeMap | undefined;
	proportionalColor: ProprtionalColor | undefined;
	proportionalSize: ProportionalSize | undefined;
};

const defaultLineStyle = new Style({
	fill: new Fill({ color: [0, 0, 0, 0] }),
});

export const createLineStyleFunction =
	({
		filters = [],
		colorMap,
		proportionalColor,
		sizeMap,
		proportionalSize,
	}: CreateLineStyleFunction) =>
	(feature: Feature) => {
		if (!filterFeature(feature, "LineString")) {
			return;
		}
		const properties = feature.getProperties();
		if (!applyFilters({ filters, object: properties })) {
			return;
		}

		const style = createLineStyle({
			properties,
			colorMap,
			sizeMap,
			proportionalSize,
			proportionalColor,
		});
		feature.setStyle([style || defaultLineStyle]);
	};
