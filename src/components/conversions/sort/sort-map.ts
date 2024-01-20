const alphanumericSort = () => {
	// console.log("alphanumericSort");
};
const testSort1 = () => {
	// console.log("testSort1");
};
const testSort2 = () => {
	// console.log("testSort2");
};
const testSort3 = () => {
	// console.log("testSort3");
};
const testSort4 = () => {
	// console.log("testSort4");
};

// export const SORT_MAP = new Map<string, string>([
// 	// ["bing", BING_NEWS_API_OBJECT],
// 	["alphanumeric", "alphanumericSort"],
// 	["testSort1", "testSort1"],
// 	["testSort2", "testSort2"],
// 	["testSort3", "testSort3"],
// 	["testSort4", "testSort4"],
// ]);
export const SORT_MAP = {
	testSort1: "testSort1",
	testSort2: "testSort2",
	testSort3: "testSort3",
	testSort4: "testSort4",
	alphanumeric: "alphanumeric",
} as const;
