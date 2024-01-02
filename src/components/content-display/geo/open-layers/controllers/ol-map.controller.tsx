import { OpenLayersMap } from "../open-layers";
import { Choropleth } from "../variants/choropleth/choropleth";
import { Heatmap } from "../variants/heatmap/heatmap";
import { Point } from "../variants/point/point";
import { OLMapVariant } from "./config/ol-map.config";

type MapType = Heatmap | Point;
export type OLMapControllerProps = {
	variant: OLMapVariant;
} & MapType;

// Clusters
// https://openlayers.org/en/latest/examples/cluster.html

// Should add the option of a key no?
// We should be able to wrap this in a yes/no key? right design wrong application?

export const OLMapController = ({ variant, ...args }: OLMapControllerProps) => {
	// const configConstructor = getConfig(variant);

	// If given features we should create a layer with those features
	// If given an array of features create multiple layers
	// those features can then be used
	// We might be given geojson/topojson data / or api data

	// if (!configConstructor) {
	// 	return <div>Error Page with Message and redirect</div>;
	// }

	// if we have done our job on the front end
	// we can be asured that the correct data will be available
	// And we can avoid trying to be too cute
	switch (variant) {
		case "heatmap":
			return <Heatmap {...(args as Heatmap)} />;
		// Might be difficult
		case "choropleth":
			return <Choropleth {...(args as Heatmap)} />;
		case "graduated-colors": //? - graduated colors point?
			return <Choropleth {...(args as Heatmap)} />;

		// Math.sqrt(value / maxValue) * maxSize
		case "proportional-symbol":
			return <Choropleth {...(args as Heatmap)} />;
		case "point":
			return <Point {...(args as Point)} />;
		///////////////////////////////////////
		case "info":
			return <Heatmap {...(args as Heatmap)} />;
		case "slider":
			// https://openlayers.org/en/latest/examples/layer-swipe.html
			return <Heatmap {...(args as Heatmap)} />;
		case "timeline":
			return <Heatmap {...(args as Heatmap)} />;
		default:
			return <Heatmap {...(args as Heatmap)} />;
	}

	// Different variants would take different options
	// const config = configConstructor({
	// 	heatmapLayer: {},
	// });

	// console.log({ config });

	// You would pass props for some base data i.e. width, height, view, etc
	// Then variant specific

	// The same data can be used to create different maps no?
	// Some maps are just show me these provided layers
	// Some maps are provide me with data and plot as requireed

	// Two main types - layer - i.e. give me data layer
	// data - give me data and I'll create the layer?

	// Single point or unique values map
	// Data map - one or multiple? features - points
	// Can provide graphic etc
	// Eventually pick variant of a variant OR data map variant something

	// Heatmap / show relative density of data OR weight of each data point

	// Choropleth maps / using graduated colours to i.e. density in different areas

	// Graduated Colours map - using the size of a shape to express score / density
	// Proportional Symbol map / more like the above but not classes
	// We are proportional in soze the the data i.e. the symbol will keep getting bigger - no max

	// Dot density - maybe not something we can / or should do programmatically - at least now

	// Isopleth Map - for continuous data - dunno man looks hard!

	// return <OpenLayersMap {...config} />;
};
