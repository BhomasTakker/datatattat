import BingMaps from "ol/source/BingMaps";

export interface BingMapsOptions {
	cacheSize?: number;
	hidpi?: boolean;
	culture?: string; //type 'en-us'
	key: string;
	imagerySet: string;
	interpolate?: boolean;

	transition?: number;

	maxZoom?: number;
	wrapX?: boolean;
}

export const createBingMapsSource = (options: BingMapsOptions) => {
	const {
		key,
		hidpi = false,
		cacheSize,
		culture = "en-us",
		imagerySet,
		interpolate = true,
		transition = 250,
		maxZoom = 19,
		wrapX = true,
	} = options || {};
	return new BingMaps({
		cacheSize,
		hidpi,
		key,
		imagerySet,
		interpolate,
		culture,
		maxZoom,
		transition,
		wrapX,
	});
};
