import { scaleLinear, extent, scaleSqrt, max } from "d3";
import { UnknownObject } from "../types";

export type CreateSquareRootScale = {
	data: UnknownObject[];
	scale: (d: UnknownObject) => number;
	maxRadius: number;
};

export const createSquareRootScale = ({
	data,
	scale,
	maxRadius,
}: CreateSquareRootScale) => {
	return (
		scaleSqrt()
			// @ts-ignore
			.domain([0, max(data, scale)])
			.range([0, maxRadius])
			.nice()
	);
};
