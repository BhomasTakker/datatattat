import { scaleLinear, extent, scaleBand } from "d3";
import { UnknownObject } from "../../types";

type CreateBandScale = {
	data: UnknownObject[];
	scale: (d: UnknownObject) => number | string;
	rangeFrom?: number;
	rangeTo?: number;
	padding?: number;
};

export const createBandScale = ({
	data,
	scale,
	rangeFrom = 0,
	rangeTo = 0,
	padding = 0.15,
}: CreateBandScale) => {
	return (
		scaleBand()
			// @ts-ignore
			.domain(data.map(scale))
			.range([rangeFrom, rangeTo])
			.paddingInner(padding)
	);
};
