import { AttributionLike, State } from "ol/source/Source";
import IIIF from "ol/source/IIIF";
import IIIFInfo from "ol/format/IIIFInfo";
import { Extent } from "ol/extent";
import { ProjectionLike } from "ol/proj";
import { Size } from "ol/size";

////////////////////////////////
// Haven't gotten to work yet
// We really want tit too...
//////////////////////////////////
export interface IIIFOptions {
	attributions?: AttributionLike;
	attributionsCollapsible?: boolean;
	cacheSize?: number;
	crossOrigin?: null | string;
	extent?: Extent;
	format?: string;
	interpolate?: boolean;
	projection?: ProjectionLike;
	quality?: string;
	reprojectionErrorThreshold?: number;
	resolutions?: number[];
	size: Size;
	sizes?: Size[];
	state?: State;
	supports?: string[];
	tilePixelRatio?: number;
	tileSize?: [number, number];
	transition?: number;

	url: string;
	version?: [];
	// number | NearestDirectionFunction (defaults to 0)
	zDirection?: number;
}
// These all extend from the same base
export const createIIIFSource = (options: IIIFOptions) => {
	const { url, size, transition, zDirection = 0 } = options || {};

	// const response = await fetch(url);
	// const responseJson = await response.json();
	// const iiifOptions = new IIIFInfo(responseJson).getTileSourceOptions();
	// if (iiifOptions === undefined || iiifOptions.version === undefined) {
	// 	return;
	// }

	// I get it - we are applying the layer before we have received the source

	return new IIIF({ url, zDirection, transition, size });
	// return new IIIF(iiifOptions);
};
