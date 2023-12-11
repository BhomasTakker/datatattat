import MousePosition from "ol/control/MousePosition";
import { ViewProjection } from "../types/open-layers.types";

export interface MousePositionControlOptions {
	coordinateFormat?: boolean;
	projection?: ViewProjection;
}

export const createMousePositionControl = (
	options?: MousePositionControlOptions
) => {
	const { projection } = options || {};

	return new MousePosition({
		// className: {}, to change css of drawn element
		// target: , provide a target if you want the control to be rendered outside the map viewport
		projection,
	});
};
