import { createHeatmapLayerConfig } from "../../controllers/config/heatmap.config";
import { OpenLayersMap, OpenLayersMapProps } from "../../open-layers";
import { createOLBaseMapConfig } from "../../controllers/config/base/base-map.config";
import { Layer } from "../../layers/open-layers.layers";
import { createLegendControl } from "../../legend/ol-ext-legend";
import { GetLayerSourceOptions } from "../../layers/sources/open-layers.sources";

// features OR src
// Need include map so we can overide etc? / pass in view, controls, etc with no fuss
export interface Heatmap extends OpenLayersMapProps {
	weight: string;
	radius?: number;
	blur?: number;
	gradient?: `#${string}`[];

	sourceOptions: GetLayerSourceOptions;
	////////////////////
	// data?
	// view
	// controls
	// interactions
}

// We may want to take another look at this one
export const Heatmap = (options: Heatmap) => {
	const { weight, radius, blur, gradient, sourceOptions, ...rest } =
		options || {};

	// What else would we need?
	// This may be the point keep minimal and build complexity
	const heatmapLayer: Layer = {
		layerOptions: {
			weight,
			radius,
			blur,
			gradient,
		},
		sourceOptions: sourceOptions,
	};

	const config = createHeatmapLayerConfig(heatmapLayer);
	const mergedConfig = createOLBaseMapConfig({
		overlayLayers: [config as Layer],
	});

	// console.log("heatmap ", { gradient });

	const legend = createLegendControl({
		heatmap: { gradient, weight, blur, radius },
	});

	return <OpenLayersMap {...mergedConfig} legend={legend} {...rest} />;
};
