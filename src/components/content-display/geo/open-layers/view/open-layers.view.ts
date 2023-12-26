import View from "ol/View";
import { transform } from "ol/proj";
import { ViewProjection } from "../types/open-layers.types";

// Would we want / OR / Should we by default
// Want to extend / wrap the View class and other library classes
// Add / Limit / interpret controls

export interface CreateViewOptions {
	center?: [number, number];
	zoom?: number;
	maxZoom?: number;
	minZoom?: number;
	projection?: ViewProjection;
}

interface PointTransform {
	coord?: [number, number];
	// Always EPSG
	projection?: ViewProjection;
	from?: `EPSG:${string}`;
	to?: `EPSG:${string}`;
}
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
		projection = "EPSG:3857",
	} = options || {};

	console.log("VIEW CREATED");

	return new View({
		center: pointTransform({ coord: [...center], to: projection }),
		zoom,
		maxZoom,
		minZoom,
		projection,
	});
};
