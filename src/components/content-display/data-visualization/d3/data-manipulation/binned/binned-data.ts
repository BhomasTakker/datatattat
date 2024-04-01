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
		// perform given function on given array
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
	// extent(data, scale)
	// to get the max, min of a dataset / I guess asuming number or incremental
	// extent(results, (d) => d[key])
	const group = groupFunction({ start, stop, id: groupId });

	// console.log("0005", { start, stop });

	const binnedData = bin()
		// accessor function passed to access the required value
		.value(groupScaleValue)
		// The range min, max of data / do we actually need?
		// defaults to using extent which is the given data range
		// no, we don't need / but can specify
		// https://d3js.org/d3-array/bin#bin_domain
		.domain([start, stop])
		// https://d3js.org/d3-array/bin#bin_thresholds
		// provide a function / default sturges assumes numbers
		//////////////////
		// provide an array
		// split data into these?
		//////////////////
		// provide a number / count
		// distribute results equally into this number of bins
		// These are the bins
		.thresholds(group)(results)
		// This is performing a transform function on each bin...
		// if one or other transform operation is provided
		// Then do else just return the bin
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
