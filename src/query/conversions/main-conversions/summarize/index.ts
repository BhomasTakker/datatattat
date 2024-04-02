import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { extent } from "d3";
import { map } from "rxjs";

export const testSummarize = ({ groupId, operationId, operationKey }: any) => {
	return map((arr: UnknownObject[]) => {
		// const groupAccessor = (d: UnknownObject) => d[groupId];
		// const operationAccessor = (d: UnknownObject) => d[operationId];
		// const resultExtent = extent(arr, groupAccessor);

		return arr;
	});
};
