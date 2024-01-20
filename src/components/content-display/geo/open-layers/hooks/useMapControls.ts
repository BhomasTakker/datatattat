import { Map as OLMap } from "ol";
import {
	AttributionControlOptions,
	createAttributionControl,
} from "../controls/attribution";
import {
	FullScreenControlOptions,
	createFullScreenControl,
} from "../controls/full-screen";
import {
	MousePositionControlOptions,
	createMousePositionControl,
} from "../controls/mouse-position";
import {
	OverviewMapControlOptions,
	createOverviewMapControl,
} from "../controls/overview-map";
import { RotateControlOptions, createRotateControl } from "../controls/rotate";
import {
	ScaleLineControlOptions,
	createScaleLineControl,
} from "../controls/scale-line";
import { ZoomControlOptions, createZoomControl } from "../controls/zoom";
import {
	ZoomSliderControlOptions,
	createZoomSliderControl,
} from "../controls/zoom-slider";
import {
	ZoomToExtentControlOptions,
	createZoomToExtentControl,
} from "../controls/zoom-to-extent";
import { useEffect } from "react";

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

interface UseMapControls {
	map: OLMap | null;
	controls?: CreateControl[];
}

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

export const useMapControls = ({ map, controls = [] }: UseMapControls) => {
	useEffect(() => {
		if (!map) {
			return;
		}
		controls.forEach((control) => {
			const { id, options } = control;
			const initControl = controlsMap.get(id);
			if (!initControl) {
				return;
			}
			map.addControl(initControl(options));
		});
	}, [controls, map]);
};
