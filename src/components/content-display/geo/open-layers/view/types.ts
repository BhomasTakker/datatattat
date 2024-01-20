import { Coordinate } from "ol/coordinate";
import { ViewProjection } from "../types/open-layers.types";

export interface CreateViewOptions {
	[key: string]: unknown;
	// We need extent - to lock in place or restrict
	center?: [number, number] | Coordinate;
	zoom?: number;
	maxZoom?: number;
	minZoom?: number;
	// We need to properly go through this
	projection?: ViewProjection;
}
