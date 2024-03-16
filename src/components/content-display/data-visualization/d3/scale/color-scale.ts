import { scaleOrdinal } from "d3";
import { UnknownObject } from "../types";

export type CreateColorScale = {
	data: UnknownObject[];
	scale: (d: UnknownObject) => number | string;
	range?: unknown[];
};

// Really ordinal scale - not just color - any assignment?
// could specify color set etc?
export const createColorScale = ({
	data,
	scale,
	range = [],
}: CreateColorScale) => {
	return (
		scaleOrdinal()
			// @ts-ignore
			.domain(data.map(scale))
			.range(range)
	);
};
