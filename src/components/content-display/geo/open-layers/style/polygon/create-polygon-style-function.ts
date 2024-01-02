import Feature from "ol/Feature";
import { filterFeature } from "../utils";
import { applyFilters } from "../../filters/apply-filters";
import { ColorMap, Filter } from "../../filters/types";
import { ProprtionalColor } from "../../types/open-layers.types";
import { createPolygonStyle } from "./create-polygon-style";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";

type CreatePolygonStyleFunction = {
	filters: Filter[];
	colorMap: ColorMap | undefined;
	proportionalColor: ProprtionalColor | undefined;
};

const defaultPolygonStyle = new Style({
	fill: new Fill({ color: [0, 0, 0, 0] }),
});

export const createPolygonStyleFunction =
	({ filters = [], colorMap, proportionalColor }: CreatePolygonStyleFunction) =>
	(feature: Feature) => {
		if (!filterFeature(feature, "Polygon")) {
			return;
		}
		const properties = feature.getProperties();
		if (!applyFilters({ filters, object: properties })) {
			return;
		}

		const style = createPolygonStyle({
			properties,
			colorMap,
			proportionalColor,
		});
		feature.setStyle([style || defaultPolygonStyle]);
	};
