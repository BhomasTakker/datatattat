// Probably create a basic management system

import TileLayer from "ol/layer/Tile";
import GroupLayer from "ol/layer/Group";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
import { Map as OSMap } from "ol";

type TileLayerTypes = "XYZ" | "OSM";
// @ts-ignore - even more annoying than usual
const tileLayerMap = new Map([
	["XYZ", XYZ],
	["OSM", OSM],
]);

interface CreateTileLayerOptions {
	// how expected is url - OSM can be used without - default?
	url?: string;
	visible?: boolean;
	type?: TileLayerTypes;
}
// const exampleLayer = new TileLayer({
// 	source: new OSM(),
// });
export const createTileLayer = ({
	url,
	visible = true,
	type = "XYZ", //sourceType
}: CreateTileLayerOptions) => {
	// Need change XYZ
	const TypeClass = tileLayerMap.get(type) || XYZ;

	return new TileLayer({
		source: new TypeClass({
			url,
		}),
		visible,
	});
};

// types?
export const createLayer = () => {};

export const createGroupLayer = (group: TileLayer<XYZ>[]) => {
	return new GroupLayer({
		layers: [...group],
	});
};

///////////
// TEMP ///
// Create from given data
const openStreetMapStandard = createTileLayer({
	url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
});

const googleMapsTerrain = createTileLayer({
	url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
	visible: false,
});

// USGS Topo
const usGovTopo = createTileLayer({
	url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
	visible: false,
});

const baseLayerGroup = createGroupLayer([
	openStreetMapStandard,
	googleMapsTerrain,
	usGovTopo,
]);

interface CreateLayersOptions {
	map: OSMap;
	data: {};
}

export const createLayers = ({ map, data }: CreateLayersOptions) => {
	// Actually madding doesn't feel okay
	map.addLayer(baseLayerGroup);
};
