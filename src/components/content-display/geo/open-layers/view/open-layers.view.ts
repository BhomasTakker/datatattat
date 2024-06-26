import View from "ol/View";
import { transform } from "ol/proj";
import { ViewProjection } from "../types/open-layers.types";
import { CreateViewOptions } from "./types";

// Would we want / OR / Should we by default
// Want to extend / wrap the View class and other library classes
// Add / Limit / interpret controls

interface PointTransform {
	coord?: [number, number];
	// Always EPSG
	projection?: ViewProjection;
	from?: `EPSG:${string}`;
	to?: `EPSG:${string}`;
}
// add to src\components\content-display\geo\open-layers\projections\open-layers.projections.ts
// Do better / setProjection, get etc
// Yoots / from and to are projections
// Potentially needs work / control / setting
const pointTransform = ({
	coord = [0, 0],
	projection = "EPSG:3857",
	from = "EPSG:4326",
	to = projection,
}: PointTransform) => {
	return transform([...coord], from, to);
};

export const createOpenLayersViewOptions = (options?: CreateViewOptions) => {
	const {
		// we need to know what this projection is taken from
		// sourceProjection?
		center = [0, 0],
		// shouldn't set here?
		zoom = 5,
		maxZoom = 20,
		minZoom = 1,
		// do we need a default - won't it default to chosen - if not should it
		projection = "EPSG:3857", //get current or use provided
	} = options || {};
	return {
		center,
		zoom,
		maxZoom,
		minZoom,
		projection,
	};
};

// Add more options
export const createOpenLayersView = (options?: CreateViewOptions) => {
	const {
		// we need to know what this projection is taken from
		// sourceProjection?
		center = [0, 0],
		zoom = 5,
		maxZoom = 20,
		minZoom = 1,
		// do we need a default - won't it default to chosen - if not should it
		projection = "EPSG:3857", //get current or use provided
	} = options || {};

	return new View({
		center: pointTransform({
			coord: [...center] as [number, number],
			to: projection,
		}),
		zoom,
		maxZoom,
		minZoom,
		projection,
	});
};
