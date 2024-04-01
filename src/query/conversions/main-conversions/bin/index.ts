// @ts-nocheck / FIX ME
import { createBinnedData } from "@/src/components/content-display/data-visualization/d3/data-manipulation/binned/binned-data";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { extent } from "d3";
import { map } from "rxjs";

export const testBin = ({
	groupAccessorId,
	groupId, //timeMonths
	operationId, //sum
	key,
	resultScaleId,
	operationKey,
}: any) => {
	return map((arr: UnknownObject[]) => {
		const groupAccessor = (d: UnknownObject) => d[groupAccessorId];
		// const operationAccessor = (d: UnknownObject) => d[operationId];
		const resultExtent = extent(arr, groupAccessor);

		return createBinnedData({
			groupScaleValue: groupAccessor,
			groupScaleDomain: resultExtent,
			groupId,
			results: arr,
			operationId,
			key,
			resultScaleValue: (d) => d[resultScaleId],
		});
	});
};
