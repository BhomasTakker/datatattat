// These aren't ol specific

import { FilterValue, FilterTypes, ApplyFilters } from "./types";

// We can create a library of filters etc
const lessThan = (value: FilterValue, test: FilterValue) => {
	// console.log("lessThan", { value, test });
	return value < test;
};
const greaterThan = (value: FilterValue, test: FilterValue) => {
	return value > test;
};
const equals = (value: FilterValue, test: FilterValue) => {
	return value == test;
};

export const filterSwitch = (
	filterType: FilterTypes,
	value: FilterValue,
	test: FilterValue
) => {
	switch (filterType) {
		case "<":
		case "lessThan":
			return lessThan(value, test);
		case ">":
		case "greaterThan":
			return greaterThan(value, test);
		case "=":
		case "equals":
			return equals(value, test);
		default:
			return false;
	}
};

export const applyFilters = ({ filters, object }: ApplyFilters) => {
	let pass = true;

	// we can use map and set
	filters.forEach(({ filter, value, key }) => {
		if (!filterSwitch(filter, object[key], value)) {
			// can we break
			pass = false;
		}
	});

	return pass;
};
