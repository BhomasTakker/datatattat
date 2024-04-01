// @ts-nocheck / FIX ME
import { CreateBandScale, createBandScale } from "./band-scale";
import { CreateColorScale, createColorScale } from "./color-scale";
import { CreateLinearScale, createLinearScale } from "./linear-scale";
import { createSequentialScale } from "./sequential-scale";
import {
	CreateSquareRootScale,
	createSquareRootScale,
} from "./square-root-scale";
import { CreateTimeScale, createTimeScale } from "./time-scale";

type GetScaleOptions =
	| CreateTimeScale
	| CreateLinearScale
	| CreateSquareRootScale
	| CreateBandScale
	| CreateColorScale;

type MapOptions =
	| "band"
	| "linear"
	| "time"
	| "square-root"
	| "color"
	| "sequential";

type MapResponse =
	| typeof createBandScale
	| typeof createLinearScale
	| typeof createTimeScale
	| typeof createSquareRootScale
	| typeof createColorScale
	| typeof createSequentialScale;

const scaleMap = new Map<MapOptions, MapResponse>([
	["band", createBandScale],
	["linear", createLinearScale],
	["time", createTimeScale],
	["square-root", createSquareRootScale],
	["color", createColorScale],
	["sequential", createSequentialScale],
]);

type GetScale = {
	type: MapOptions;
	options: GetScaleOptions;
};

export const getScale = ({ type, options }: GetScale) => {
	const scale = scaleMap.get(type);
	// If undefined ??
	return scale(options);
};
