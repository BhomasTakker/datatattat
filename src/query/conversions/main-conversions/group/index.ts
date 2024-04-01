import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { extent } from "d3";
import { map } from "rxjs";

type GroupProps = {
	key: string;
	n: number;
};

/**
 * Provide a number value
 * @returns rxjs transducer
 */
// export const testGroup = ({ key }: GroupProps) => {
// 	return filter((value: UnknownObject) => {
// 		if (value[key] && typeof +value[key] !== "number") {
// 			return false;
// 		}
// 		return +value[key] === +n;
// 	});
// };

// Create Groups and Bins
// And add summaries to data if specified

// https://d3js.org/d3-array/bin
// https://d3js.org/d3-array/group
// BINNING IS DIFFERENT TO GROUPING

// Can also create summaries of data
// i.e create counts, and a bunch of shit
// https://d3js.org/d3-array/summarize

// extent(results, (d) => d[key])
// extent(arr, (d) => d[key])
export const testGroup = ({ groupId, operationId, operationKey }: any) => {
	return map((arr: UnknownObject[]) => {
		const groupAccessor = (d: UnknownObject) => d[groupId];
		const operationAccessor = (d: UnknownObject) => d[operationId];
		const resultExtent = extent(arr, groupAccessor);

		return arr;
	});
};
