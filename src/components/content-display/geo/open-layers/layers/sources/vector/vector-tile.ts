import { Extent } from "ol/extent";
import FeatureFormat from "ol/format/Feature";
import MVT from "ol/format/MVT";
import { AttributionLike } from "ol/source/Source";
import VectorTile from "ol/source/VectorTile";

export interface VectorTileOptions {
	attributions?: AttributionLike;
	format?: FeatureFormat;
	extent?: Extent;
	url?: string;
	urls?: string[];
	maxZoom?: number;
	minZoom?: number;
	tileSize?: [number, number];
	transition?: number;
}
// These all extend from the same base
export const createVectorTileSource = (options: VectorTileOptions) => {
	const {
		url,
		extent,
		maxZoom = 42,
		minZoom = 0,
		format,
		urls,
		tileSize = [256, 256],
		transition = 250,
	} = options || {};

	return new VectorTile({
		extent,
		url,
		urls,
		maxZoom,
		minZoom,
		tileSize,
		transition,
		format,
	});
};
