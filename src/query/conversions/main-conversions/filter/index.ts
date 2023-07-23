// rxjs operators
// https://app.pluralsight.com/course-player?clipId=0558ef44-e83b-4c8d-aca0-eafd8ae2d16b

import {
	distinct as rxjsDistinct,
	first as rxjsFirst,
	last as rxjsLast,
	skip,
	skipLast,
	take,
	takeLast,
} from "rxjs";

// // we need to accept inputs
// export const top5 = (data: any) => {
// 	// take in wider data
// 	return take(5);
// };

// we can pass filter functions to first and last
export const first = ({}: any) => {
	return rxjsFirst();
};

export const last = ({}: any) => {
	return rxjsLast();
};

// if not number so nothing / return dummy tap? () => {log('something was suuposed to happen here.')}
export const topN = ({ amount }: any) => {
	const n = amount ?? 10; // put through a get
	// take in wider data
	return take(n);
};

export const lastN = ({ amount }: any) => {
	const n = amount ?? 10; // put through a get
	// take in wider data
	return takeLast(n);
};

export const skipN = ({ amount }: any) => {
	const n = amount ?? 10;
	// take in wider data
	return skip(n);
};

export const skipLastN = ({ amount }: any) => {
	const n = amount ?? 10;
	// take in wider data
	return skipLast(n);
};

export const distinct = ({}: any) => {
	// does this match this
	// we would need to pass a function to determine distintness / or just create a bunch
	// i.e. distinct((data) => props[props.key])
	return rxjsDistinct();
};

export const distinctKey = ({ key }: any) => {
	// does this match this
	// we would need to pass a function to determine distintness / or just create a bunch
	// i.e. distinct((data) => props[props.key])
	return rxjsDistinct((data: any) => data[`${key}`]);
};

// Note -
// takeUntil / skipUntil? - takes/skips until a seperate observable has completed
//
// [xxx]While - would need a dynamic way of creating / passing a function
// Perhaps cool as f thing to have but ?? tricky, more v nice to have
// How useful really?
//
// distinct
// if a standard

/////////
// FILTERS
// filter, filterFirst, filterLast
// filter <- just a whole bunch of options right?
// maths operations, geo operations, date operations, string, equivelence, etc
// effectively select filter from available filters
// i.e. geo - North of, within range, outside range
// i.e. maths greaterThan, lessThan, within, outside
////////////////////////////////
// Above is how to do observables no?
// select from a list of predefined (with props) observables
// I don't know what they would be but...
