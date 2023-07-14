const topN = () => {
	console.log("topN");
};
const testFilter1 = () => {
	console.log("testFilter1");
};
const testFilter2 = () => {
	console.log("testFilter2");
};
const testFilter3 = () => {
	console.log("testFilter3");
};
const testFilter4 = () => {
	console.log("testFilter4");
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
	testFilter1: "testFilter1",
	testFilter2: "testFilter2",
	testFilter3: "testFilter3",
	testFilter4: "testFilter4",
	testFilter5: "testFilter5",
} as const;
