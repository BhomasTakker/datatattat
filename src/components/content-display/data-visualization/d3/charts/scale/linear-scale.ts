import { scaleLinear, extent } from "d3";
import { UnknownObject } from "../../types";

type CreateLinearScale = {
	data: UnknownObject[];
	scale: (d: UnknownObject) => number;
	rangeFrom?: number;
	rangeTo?: number;
};

export const createLinearScale = ({
	data,
	scale,
	rangeFrom = 0,
	rangeTo = 0,
}: CreateLinearScale) => {
	return (
		scaleLinear()
			// @ts-ignore
			.domain(extent(data, scale))
			.range([rangeFrom, rangeTo])
			.nice()
	);
};
