import TileArcGISRest from "ol/source/TileArcGISRest";
import { AttributionLike } from "ol/source/Source";

export interface TileArcGISRestOptions {
	url: string;
	attributions: AttributionLike;
}

export const createTileArcGISRestSource = (options?: TileArcGISRestOptions) => {
	const { url, attributions } = options || {};
	return new TileArcGISRest({ url, attributions });
};
