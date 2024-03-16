import { scaleSequential, interpolateYlOrRd, max } from "d3";
import { UnknownObject } from "../types";

export type CreateLinearScale = {
	data: UnknownObject[];
	scale: (d: UnknownObject) => number;
};

export const createSequentialScale = ({ data, scale }: CreateLinearScale) => {
	return (
		// pass scheme in
		scaleSequential(interpolateYlOrRd)
			// @ts-ignore
			.domain([0, max(data, scale)])
	);
};
