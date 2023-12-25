import { MapBrowserEvent, MapEvent, Map as OLMap } from "ol";
import { fromLonLat, toLonLat } from "ol/proj";
// import proj4 from 'ol/proj/proj4'
type OpenLayersEvents = "click";
interface OpenLayersEventOptions {}

interface CreateMapEventHandler {
	event: OpenLayersEvents;
	callback: (e: MapBrowserEvent<UIEvent>) => void;
}

const createMapEventHandler = (
	map: OLMap,
	{ event, callback }: CreateMapEventHandler
) => {
	map.on(event, callback);
};

// const openLayersEvents = new Map([["onClick", createMapEventHandler]]);

export const addOpenLayerEvent = (map: OLMap, events: []) => {
	createMapEventHandler(map, {
		event: "click",
		callback: (e: MapBrowserEvent<UIEvent>) => {
			console.log("CLICK! pixel ", e.pixel);
			console.log("CLICK! coordinate ", e.coordinate);
			const toNonLonLat = fromLonLat(e.coordinate, "EPSG:3857");
			console.log("CLICK! toNonLonLat ", toNonLonLat);
			const backToLonLat = toLonLat(toNonLonLat, "EPSG:3857");
			console.log("CLICK! backToLonLat ", backToLonLat);
			// console.log("CLICK! projection ", map.getView().getProjection());
			// console.log("CLICK! projection ", map.getView().getProjection());
			// Effectively create a library of functions
			// i.e. getContent from feature
			// Get feature -> feature id -> getContent -> displayContent
			map.forEachFeatureAtPixel(
				e.pixel,
				(feature, layer) => {
					const featureName = feature.get("name");
					const featureRank = feature.get("rank");
					const featureScore = feature.get("score");
					// map.addOverlay()
					console.log({ featureName, featureRank, featureScore });
				},
				// options for getFeatures function
				{
					layerFilter: (l) => {
						return l.get("title") == "VectorImageLayer";
					},
				}
			);
		},
	});
};
