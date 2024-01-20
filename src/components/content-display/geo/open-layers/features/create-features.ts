import { transform } from "ol/proj";
import OLFeature from "ol/Feature";
import { createPoint, createPoints } from "./points";

type FeatureLists = "points" | "polygons" | "circles" | "lines";
type FeatureTypes = "point" | "polygon" | "circle" | "line";

type Feature = {
	[key: string]: unknown;
	// better way of doing - create  Coordinate?
	coordinates: [number, number];
};

const createFeature = (feature: Feature, type: FeatureTypes) => {
	switch (type) {
		case "point":
			return createPoint(feature);

		case "circle":
			return createPoint(feature);

		case "line":
			return createPoint(feature);

		case "polygon":
			return createPoint(feature);
	}
};

interface CreateFeatures {
	features: Feature[];
	type: FeatureLists;
}
// Something like this
export const createFeatures = ({ features, type }: CreateFeatures) => {
	if (!features || !features.length) {
		return undefined;
	}
	// if type === points
	switch (type) {
		case "points":
			return createPoints(features);
		case "polygons":
			return createPoints(features);
		case "circles":
			return createPoints(features);
		case "lines":
			return createPoints(features);
		default:
			return features.map((feature) => {
				const { coordinates, ...rest } = feature;
				// get type from somewhere
				return createFeature(feature, "point");
			});
	}
};
