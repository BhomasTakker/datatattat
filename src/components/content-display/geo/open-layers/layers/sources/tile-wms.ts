//https://wrecks.nauticalcharts.noaa.gov/arcgis/services/public_wrecks/Wrecks_And_Obstructions/MapServer/WMSServer
import TileWMS from "ol/source/TileWMS";
import { AttributionLike } from "ol/source/Source";

export interface TileWMSOptions {
	url?: string;
	urls?: string[];
	attributions: AttributionLike;
	attributionsCollapsible: boolean;
	cacheSize?: number;
	hidpi?: boolean;
	interpolate?: boolean;
	params: { [x: string]: any };

	transition?: number;

	wrapX?: boolean;
}

export const createTileWMSSource = (options: TileWMSOptions) => {
	const {
		url,
		urls,
		attributions,
		attributionsCollapsible = true,
		params,
		hidpi = false,
		cacheSize,
		interpolate = true,
		transition = 250,
		wrapX = true,
	} = options || {};
	return new TileWMS({
		url,
		urls,
		params,
		attributions,
		attributionsCollapsible,
		cacheSize,
		hidpi,
		interpolate,
		transition,
		wrapX,
	});
};
