import FeatureFormat from "ol/format/Feature";
import { createOLHeatmapConfig } from "../controllers/config/heatmap.config";
import { OpenLayersMap } from "../open-layers";

// features OR src
export interface Choropleth {
	weight: string;
	radius?: number;
	blur?: number;
	gradient?: `#${string}`[];
	// required if url used
	format: FeatureFormat;
	url: string;
	////////////////////
	// data?
	// view
	// controls
	// interactions
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
	const { weight, radius, blur, gradient, format, url } = options || {};
	// deconstruct and do with options however you like
	// This way we know they match - or at least they should
	const heatmapLayer = {
		layerOptions: {
			weight,
			radius,
			blur,
			gradient,
		},
		sourceOptions: {
			format,
			url,
		},
	};

	const config = createOLHeatmapConfig({ heatmapLayer });

	return <OpenLayersMap {...config} />;
};
