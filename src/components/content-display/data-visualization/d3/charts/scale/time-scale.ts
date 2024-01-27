import { extent, scaleTime } from "d3";
import { UnknownObject } from "../../types";

type CreateTimeScale = {
	data: UnknownObject[];
	scale: (d: UnknownObject) => Date;
	rangeFrom?: number;
	rangeTo?: number;
};

export const createTimeScale = ({
	data,
	scale,
	rangeFrom = 0,
	rangeTo = 0,
}: CreateTimeScale) => {
	return (
		scaleTime()
			// @ts-ignore
			.domain(extent(data, scale))
			.range([rangeFrom, rangeTo])
			.nice()
	);
};
