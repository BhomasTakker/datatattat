import FeatureFormat from "ol/format/Feature";
import { createHeatmapLayerConfig } from "../../controllers/config/heatmap.config";
import { OpenLayersMap } from "../../open-layers";
import { createOLBaseMapConfig } from "../../controllers/config/base/base-map.config";
import { Layer } from "../../layers/open-layers.layers";
import { ColorMap, Filter } from "../../filters/types";
import { ProprtionalColor } from "../../types/open-layers.types";
import { createOLChoroplethLayerConfig } from "../../controllers/config/choropleth.config";
import { createPolygonStyleFunction } from "../../style/polygon/create-polygon-style-function";
import { StyleFunction } from "ol/style/Style";
import { createLegendControl } from "../../legend/ol-ext-legend";

// features OR src
export interface Choropleth {
	filters?: Filter[];
	colorMap: ColorMap;
	proportionalColor: ProprtionalColor;
	format: FeatureFormat;
	url: string;
	////////////////////
}

// So again use say a vector layer
// format and url <- you are getting features
// you need to get an id from feature for the data think weight id
// feature in this case being a polygon
// you then need to use a range - say is this or > < that
// And color it

// Okay but this is pretty in depth / and it's what you wanted...
// Think create style functions
// pass in id, select colors range?, select function
// i.e. one color each / or gradient according to highest / lowest value
// i.e. match value to color
// Would need to match to key

export const Choropleth = (options: Choropleth) => {
	const {
		proportionalColor,
		colorMap,
		format,
		filters = [],
		url,
		...rest
	} = options || {};
	// deconstruct and do with options however you like
	// This way we know they match - or at least they should
	const layerOptions = {
		title: "Example Title",
	};
	const sourceOptions = { format, url };
	const config = createOLChoroplethLayerConfig({
		layerOptions,
		sourceOptions,
		style: createPolygonStyleFunction({
			filters,
			colorMap,
			proportionalColor,
		}) as StyleFunction,
	});

	const mergedConfig = createOLBaseMapConfig({
		overlayLayers: [config as Layer],
	});

	const legend = createLegendControl({ colorMap, proportionalColor });

	return <OpenLayersMap {...mergedConfig} legend={legend} {...rest} />;
};
