import { Collection } from "ol";
import { FeatureClass } from "ol/Feature";
import { Extent } from "ol/extent";
import { FeatureLoader, FeatureUrlFunction } from "ol/featureloader";
import FeatureFormat from "ol/format/Feature";
import MVT from "ol/format/MVT";
import { AttributionLike } from "ol/source/Source";
import Vector, { LoadingStrategy } from "ol/source/Vector";

export interface VectorOptions {
	attributions?: AttributionLike;
	features?: Array<FeatureClass> | Collection<FeatureClass> | undefined;

	format?: FeatureFormat;
	loader?: FeatureLoader;
	overlaps?: boolean;
	strategy?: LoadingStrategy;

	useSpatialIndex?: boolean;

	wrapX?: boolean;

	extent?: Extent;
	url?: string | FeatureUrlFunction;
	urls?: string[];
	maxZoom?: number;
	minZoom?: number;
	tileSize?: [number, number];
	transition?: number;
}
// These all extend from the same base
export const createVectorSource = (options: VectorOptions) => {
	const {
		attributions,
		features,
		format,
		loader,
		overlaps = true,
		strategy,
		useSpatialIndex = true,
		wrapX = true,

		url,
	} = options || {};

	// console.log({ options });

	return new Vector({
		attributions,
		// @ts-ignore fix my type?
		// use features when no url and format
		// pass features as an array of created features
		features, // unsure
		format,
		loader,

		overlaps,
		strategy,
		useSpatialIndex,
		wrapX,
		url,
	});
};
