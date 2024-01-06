import Feature from "ol/Feature";
import { Geometry } from "../../types/open-layers.types";

export const filterFeature = (feature: Feature, geometry: Geometry) => {
	const featureGeometry = feature.getGeometry()?.getType();
	console.log({ featureGeometry });
	return featureGeometry == geometry;
};
