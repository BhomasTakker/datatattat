// export const SORT_MAP = new Map<string, string>([
// 	// ["bing", BING_NEWS_API_OBJECT],
// 	["alphanumeric", "alphanumericSort"],
// 	["testSort1", "testSort1"],
// 	["testSort2", "testSort2"],
// 	["testSort3", "testSort3"],
// 	["testSort4", "testSort4"],
// ]);
export const SORT_MAP = {
	// should be alpha ascending and descending
	alphanumeric: "alphanumeric",
	numericAscending: "numericAscending",
	numericDescending: "numericDescending",
} as const;
