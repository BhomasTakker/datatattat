import OSM from "ol/source/OSM";
import { AttributionLike } from "ol/source/Source";

export interface OSMOptions {
	maxZoom?: number;
	attributions?: AttributionLike;
	opaque?: boolean;
	wrapX?: boolean;
	transition?: number;
}

export const createOSMSource = (options?: OSMOptions) => {
	const {
		maxZoom = 19,
		attributions,
		opaque = true,
		wrapX = true,
		transition = 250,
	} = options || {};
	return new OSM({ maxZoom, attributions, opaque, wrapX, transition });
};
