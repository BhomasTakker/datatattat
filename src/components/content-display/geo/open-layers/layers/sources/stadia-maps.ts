import StadiaMaps from "ol/source/StadiaMaps";
type StadiaLayers =
	| "alidade_smooth"
	| "alidade_smooth_dark"
	| "outdoors"
	| "stamen_terrain"
	| "stamen_terrain_background"
	| "stamen_terrain_labels"
	| "stamen_terrain_lines"
	| "stamen_toner_background"
	| "stamen_toner"
	| "stamen_toner_labels"
	| "stamen_toner_lines"
	| "stamen_toner_lite"
	| "stamen_watercolor"
	| "osm_bright";

// extends XYZ / You can use XYZ and provide the correct url
export interface StadiaMapsOptions {
	apiKey?: string;
	cacheSize?: number;
	interpolate?: boolean;
	layer: StadiaLayers;

	maxZoom?: number;
	minZoom?: number;

	url?: string;

	transition?: number;

	wrapX?: boolean;

	retina?: boolean;
}

export const createStadiaMapsSource = (options: StadiaMapsOptions) => {
	const {
		apiKey,
		cacheSize,
		interpolate = true,
		layer,
		maxZoom,
		minZoom,
		transition = 250,
		url,
		wrapX = true,

		retina,
	} = options || {};
	return new StadiaMaps({
		apiKey,
		cacheSize,
		interpolate,
		layer,
		maxZoom,
		minZoom,
		transition,
		url,
		wrapX,

		retina,
	});
};
