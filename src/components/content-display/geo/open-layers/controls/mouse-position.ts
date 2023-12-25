import MousePosition from "ol/control/MousePosition";
import { ProjectionLike } from "ol/proj";
import MapEvent from "ol/MapEvent";
import { CoordinateFormat } from "ol/coordinate";

export interface MousePositionControlOptions {
	className?: string; // can pass in css.module / css class
	coordinateFormat?: CoordinateFormat;
	projection?: ProjectionLike;
	render?: (arg0: MapEvent) => void;
	target?: HTMLElement | string;
	placeholder?: string;
	wrapX?: boolean;
}

export const createMousePositionControl = (
	options?: MousePositionControlOptions
) => {
	const {
		className,
		coordinateFormat,
		projection,
		render,
		target,
		placeholder,
		wrapX,
	} = options || {};

	return new MousePosition({
		className,
		coordinateFormat,
		projection,
		render,
		target,
		placeholder,
		wrapX,
	});
};
