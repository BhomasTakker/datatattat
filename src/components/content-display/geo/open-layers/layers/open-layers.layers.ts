// Probably create a basic management system

// Proper redo required

import TileLayer from "ol/layer/Tile";
import GroupLayer from "ol/layer/Group";
import XYZ from "ol/source/XYZ";
import { Map as OLMap } from "ol";
import {
	TileLayerSources,
	getLayerSource,
	getTileLayerSource,
} from "./sources/open-layers.sources";
import { baseLayers } from "./open-layers.layers.mock";
import ImageLayer from "ol/layer/Image";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorLayer from "ol/layer/Vector";
import VectorImageLayer from "ol/layer/VectorImage";
import HeatmapLayer from "ol/layer/Heatmap";
import GraticuleLayer from "ol/layer/Graticule";

export type LayerModules = TileLayer<any> | VectorTileLayer | ImageLayer<any>;
type Layers =
	| "TileLayer"
	| "ImageLayer"
	| "VectorTileLayer"
	| "VectorLayer"
	| "VectorImageLayer"
	| "HeatmapLayer"
	| "GraticuleLayer";
const layerSourceMap = new Map<Layers, any>([
	["TileLayer", TileLayer],
	["ImageLayer", ImageLayer],
	["VectorTileLayer", VectorTileLayer],
	["VectorLayer", VectorLayer],
	["VectorImageLayer", VectorImageLayer],
	["HeatmapLayer", HeatmapLayer],
	["GraticuleLayer", GraticuleLayer],
]);
// utils
export const createLayer = (
	type: Layers = "TileLayer",
	options: any = {},
	source?: any
): LayerModules => {
	const LayerType = layerSourceMap.get(type) || TileLayer;
	console.log({ type, source, LayerType });
	// Graticule layer has no source

	return new LayerType({
		source: source ? source : undefined,
		...options,
	});
};

export const createGroupLayer = (group: TileLayer<any>[]) => {
	return new GroupLayer({
		layers: [...group],
	});
};

// Would we have need?
// const baseLayerGroup = createGroupLayer([
// 	openStreetMapStandard,
// 	googleMapsTerrain,
// 	usGovTopo,
// 	bing,
// 	tileArcGISRest,
// 	tileWMS,
// 	stadia,
// 	debug,
// ]);

export type Layer = {
	layerId?: Layers;
	layerOptions?: any;
	sourceId?: TileLayerSources;
	sourceOptions?: any;
};

interface CreateLayersOptions {
	map: OLMap;
	baseLayers: Layer[];
	overlayLayers?: Layer[];
}

interface InitialiseLayers {
	map: OLMap;
	layers: Layer[];
}

interface CreateLayerOptions {
	map: OLMap;
	layer: Layer;
}

// really create layer
const initialiseLayer = ({ map, layer }: CreateLayerOptions) => {
	const {
		layerId = "TileLayer",
		layerOptions = {},
		sourceId = "XYZ",
		sourceOptions = {},
	} = layer;
	const newLayer = createLayer(layerId, layerOptions);
	newLayer.setSource(getLayerSource(sourceId, sourceOptions));
	return newLayer;
	// map.addLayer(newLayer);
};

export const initialiseLayers = ({ map, layers }: InitialiseLayers) => {
	return layers.map((layer) => {
		return initialiseLayer({ map, layer });
	});
};

// map and object?
export const createLayers = ({
	map,
	baseLayers,
	overlayLayers = [],
}: CreateLayersOptions) => {
	// map.addLayer(baseLayerGroup);
	// data.baseLayers
	// data.overlays ?
	const base = initialiseLayers({ map, layers: baseLayers });
	// Would we actually need to do this?
	const overlays = initialiseLayers({ map, layers: overlayLayers });
	// createOverlayLayers
	return [...base, ...overlays];
};
