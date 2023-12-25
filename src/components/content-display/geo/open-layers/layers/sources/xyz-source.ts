import { AttributionLike } from "ol/source/Source";
import XYZ from "ol/source/XYZ";

export interface XYZOptions {
	attributions?: AttributionLike;
	url?: string;
	urls?: string[];
	maxZoom?: number;
	minZoom?: number;
	tileSize?: [number, number];
	transition?: number;
}
// These all extend from the same base
export const createXYZSource = (options: XYZOptions) => {
	const {
		url,
		maxZoom = 42,
		minZoom = 0,
		urls,
		tileSize = [256, 256],
		transition = 250,
	} = options || {};
	console.log({ XYZ: url });
	return new XYZ({ url, urls, maxZoom, minZoom, tileSize, transition });
};
