import { ViewProjection } from "../types/open-layers.types";

export interface CreateViewOptions {
	// We need extent - to lock in place or restrict
	center?: [number, number];
	zoom?: number;
	maxZoom?: number;
	minZoom?: number;
	// We need to properly go through this
	projection?: ViewProjection;
}
