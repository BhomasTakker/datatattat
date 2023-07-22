const topN = () => {
	console.log("topN");
};

// export const FILTER_MAP = new Map<string, string>([
// 	// ["bing", BING_NEWS_API_OBJECT],
// 	["topN", "topN"],
// 	["testFilter1", "testFilter1"],
// 	["testFilter2", "testFilter2"],
// 	["testFilter3", "testFilter3"],
// 	["testFilter4", "testFilter4"],
// ]);
export const FILTER_MAP = {
	top5: "top5",
} as const;
