import TileArcGISRest from "ol/source/TileArcGISRest";
import { BingMapsOptions, createBingMapsSource } from "./bing-maps-source";
import { OSMOptions, createOSMSource } from "./osm-source";
import { XYZOptions, createXYZSource } from "./xyz-source";
import { createTileArcGISRestSource } from "./tile-arc-gis-rest";
import { createTileWMSSource } from "./tile-wms";
import { createStadiaMapsSource } from "./stadia-maps";
import { createTileDebugSource } from "./tile-debug";
import { createVectorTileSource } from "./vector/vector-tile";
import { createVectorSource } from "./vector/vector";
import { createIIIFSource } from "./iiif";

export type TileLayerSources =
	| "XYZ"
	| "OSM"
	| "BingMaps"
	| "TileArcGISRest"
	| "TileWMS"
	| "StadiaMaps"
	| "TileDebug";
interface GetLayerSourceOptions {}

export type ImageLayerSources = "ImageArcGISRest" | "ImageWMS";
export type VectorLayerSources = "VectorTile" | "Vector";

// This could be sources but tileLayerSourcesMap is probably better
const tileLayerSourceMap = new Map<string, any>([
	["XYZ", createXYZSource],
	["OSM", createOSMSource],
	["BingMaps", createBingMapsSource],
	["TileArcGISRest", createTileArcGISRestSource],
	["TileWMS", createTileWMSSource],
	["StadiaMaps", createStadiaMapsSource],
	["TileDebug", createTileDebugSource],
	["IIIF", createIIIFSource],
]);

// Note:- A Raster source is an array which can containe all/any
// of the other sources
// Static Images is a possibility  - that would require getting an image from a store
// i.e. Amazon Bucket
// Not created / just need to go through and create Image sources
const imageLayerSourceMap = new Map<string, any>([
	["ImageArcGISRest", createTileArcGISRestSource],
	["ImageWMS", createTileWMSSource],
]);

const vectorLayerSourceMap = new Map<string, any>([
	["VectorTile", createVectorTileSource],
	["Vector", createVectorSource],
]);

const sourceMap = new Map<string, any>([
	...tileLayerSourceMap,
	...imageLayerSourceMap,
	...vectorLayerSourceMap,
]);

// getTileLayerSource
export const getTileLayerSource = (
	id: TileLayerSources,
	options: GetLayerSourceOptions //could be different shapes
) => {
	const getter = tileLayerSourceMap.get(id);
	return getter ? getter(options) : null;
};

export const getImageLayerSource = (
	id: ImageLayerSources,
	options: GetLayerSourceOptions //could be different shapes
) => {
	const getter = imageLayerSourceMap.get(id);
	return getter ? getter(options) : null;
};

export const getVectorLayerSource = (
	id: VectorLayerSources,
	options: GetLayerSourceOptions //could be different shapes
) => {
	const getter = vectorLayerSourceMap.get(id);
	return getter ? getter(options) : null;
};

export const getLayerSource = (
	id: TileLayerSources | ImageLayerSources | VectorLayerSources,
	options: GetLayerSourceOptions //could be different shapes
) => {
	const getter = sourceMap.get(id);
	console.log({ getter });
	return getter ? getter(options) : null;
};
