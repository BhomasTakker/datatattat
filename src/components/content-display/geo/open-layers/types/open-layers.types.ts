import { ApplyProportionalColor } from "../style/apply-proportional-color";
import { ApplyProportionalSize } from "../style/apply-proprtional-size";

export type Geometry = "Point" | "Line" | "Polygon";

export type CustomViewProjection = `EPSG:${number | string}`;
// Need explainer on what each of these is
// e.g.
export type ViewProjection =
	/**
	 * x,y position
	 */
	| "EPSG:3857"

	/**
	 * latitude and longitude
	 */
	| "EPSG:4326"
	/**
	 * For dynamic provided projection (proj4)
	 */
	| CustomViewProjection;

export type ProprtionalColor = Omit<ApplyProportionalColor, "object">;
export type ProprtionalSize = Omit<ApplyProportionalSize, "object">;
