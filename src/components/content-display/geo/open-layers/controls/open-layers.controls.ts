import OSMap from "ol/Map";
import { ScaleLineControlOptions, createScaleLineControl } from "./scale-line";
import {
	FullScreenControlOptions,
	createFullScreenControl,
} from "./full-screen";
import {
	ZoomSliderControlOptions,
	createZoomSliderControl,
} from "./zoom-slider";
import {
	ZoomToExtentControlOptions,
	createZoomToExtentControl,
} from "./zoom-to-extent";
import { ZoomControlOptions, createZoomControl } from "./zoom";
import { RotateControlOptions, createRotateControl } from "./rotate";
import {
	AttributionControlOptions,
	createAttributionControl,
} from "./attribution";
import {
	OverviewMapControlOptions,
	createOverviewMapControl,
} from "./overview-map";
import {
	MousePositionControlOptions,
	createMousePositionControl,
} from "./mouse-position";

// You can create basic controls by using the given Controls class
type CreateControlsOptions =
	| FullScreenControlOptions
	| MousePositionControlOptions
	| RotateControlOptions
	| ScaleLineControlOptions
	| ZoomSliderControlOptions
	| ZoomToExtentControlOptions
	| ZoomControlOptions
	| AttributionControlOptions
	| OverviewMapControlOptions;

type Controls =
	| "FullScreen"
	| "ZoomSlider"
	| "ZoomToExtent"
	| "Zoom"
	| "Rotate"
	| "Attributions"
	| "Overview"
	| "MousePosition"
	| "ScaleLine";

export type CreateControl = {
	id: Controls;
	options?: CreateControlsOptions;
};

const controlsMap = new Map<Controls, any>([
	["FullScreen", createFullScreenControl],
	["ZoomSlider", createZoomSliderControl],
	["ZoomToExtent", createZoomToExtentControl],
	["Zoom", createZoomControl],
	["Rotate", createRotateControl],
	["Attributions", createAttributionControl],
	["ScaleLine", createScaleLineControl],
	["Overview", createOverviewMapControl],
	["MousePosition", createMousePositionControl],
]);

export const createOpenLayersControls = (
	map: OSMap,
	controls: CreateControl[]
) => {
	// loop given set taking control id and control options
	controls.forEach((control) => {
		const { id, options } = control;
		const initControl = controlsMap.get(id);
		if (!initControl) {
			return;
		}
		map.addControl(initControl(options));
	});
};
