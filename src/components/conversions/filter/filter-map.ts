// Possible operators?
// return multiple
// distinctUntilChanged: "distinctUntilChanged",
// [skip/take]Until, [skip/take]While
////////////////////////////
// Return Single
//////////////////////////
// min, max - can pass in a sort function it seems
// and it will take the min/max one
///////////////////////////
// elementAt - is this useful?
// I mean not my call but use would be in - half of results or something no
// like give me 7th place? <- exactly why you would no?
////////////////////////
// find - return first to pass filter
/////////////////////////////////////////
// reduce and scan
// reduce will return once (like toArray)
// and will return the accumulated value
// scan will return at each step sequetially returning the accumulator

// A lot of useful operators etc if we were for example taking in a stream of values
////////////////////////////////////
// grouping
// groupBy might be interesting but getting very complicated
// that would be returning multiple arrays for example
// which would perhaps need to be grouped before actually being returned
/////////////////////////////////
// pairwise
// return results in pairs
// mergeAll or something for an array of these pairs

export const FILTER_MAP = {
	// top5: "top5",
	topN: "topN",
	lastN: "lastN",
	skipN: "skipN",
	skipLastN: "skipLastN",
	///////////////////////
	distinct: "distinct",
	distinctKey: "distinctKey",
	// we can pass functions / filters to these - i.e. the first/last positive filter result
	first: "first",
	last: "last",

	///////////////////////
	// Group these
	includes: "includes",
	greaterThan: "greaterThan",
	lessThan: "lessThan",
	equals: "equals",
} as const;
