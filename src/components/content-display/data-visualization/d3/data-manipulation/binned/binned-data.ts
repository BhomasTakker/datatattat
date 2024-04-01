// @ts-nocheck / FIX ME
// I suppose call a data-manipulation function
// Take / like conversions / an array

import { Bin, bin, sum, timeMonths } from "d3";
import { UnknownObject } from "../../types";

const groupFunctionsMap = new Map([["timeMonths", timeMonths]]);
const operationsMap = new Map([["sum", sum]]);

type GroupFunctions = {
	start: Date;
	stop: Date;
	id: string; // union
};

// const noFun  = (val:unknown) => val;
const groupFunction = ({ start, stop, id }: GroupFunctions) => {
	const fun = groupFunctionsMap.get(id);
	if (!fun) {
		// throw error or return undefined;
		return;
	}

	// We nay need to call a wrapper to format the inputs?
	// i.e. to date ???
	// Or generic this up
	return fun(start, stop);
};

type PerformOperation = {
	key: string;
	operationId: string; // it's a unnion
	value: Bin<number, number>;
	scaleValue: (d: UnknownObject) => unknown;
};
const performOperation = ({
	key,
	operationId,
	value,
	scaleValue,
}: PerformOperation) => {
	const fun = operationsMap.get(operationId);
	if (!fun) {
		// throw error or return undefined;
		return;
	}
	return {
		[key]: fun(value, scaleValue),
		// Start and end of group / bounds
		low: value.x0,
		high: value.x1,
	};
};

// loop through the manipulations
type CreateBinnedData = {
	// groupScaleValue / groupScaleDomain
	groupScaleValue: (d: UnknownObject) => unknown;
	groupScaleDomain: string[] | number[] | Date[];
	// resultScaleVale / name is off is more value getter
	resultScaleValue: (d: UnknownObject) => unknown;

	results: UnknownObject[];
	// maybe group operations vary
	groupId: "timeMonths";
	// maybe operation options vary
	operationId: "sum";
	key: string;
};

export const createBinnedData = ({
	groupScaleValue,
	groupScaleDomain,
	groupId,
	results,
	operationId,
	key,
	resultScaleValue,
}: CreateBinnedData) => {
	const [start, stop] = groupScaleDomain;
	const group = groupFunction({ start, stop, id: groupId });

	// console.log("0005", { start, stop });

	const binnedData = bin()
		.value(groupScaleValue)
		.domain([start, stop])
		.thresholds(group)(results)
		.map((ary) => {
			return performOperation({
				value: ary,
				key,
				operationId,
				scaleValue: resultScaleValue,
			});
		});

	// if you throw and catch an error you can just return the un modified data

	return binnedData;
};
