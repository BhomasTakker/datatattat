import FeaturePoint from "ol/geom/Point";

import { transform } from "ol/proj";
import { Feature } from "ol";

type Point = {
	[key: string]: unknown;
	// better way of doing - create  Coordinate?
	coordinates: [number, number];
};

// export for create features
// i.e. feature type == point new Point
export const createPoint = (point: Point) => {
	const { coordinates, ...rest } = point;
	// You can just pass a created geometry
	return new Feature({
		geometry: new FeaturePoint(
			transform([coordinates[1], coordinates[0]], "EPSG:4326", "EPSG:3857")
		),
		// labelPoint: new Point(labelCoords),
		// name: 'My Polygon',
		...rest,
	});
};

export const createPoints = (points: Point[]) => {
	if (!points || !points.length) {
		return undefined;
	}

	return points.map((point) => {
		const { coordinates, ...rest } = point;

		return createPoint(point);
	});
};
