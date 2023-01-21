export const setupIntersectionalObserverMock = () => {
	const observe = jest.fn();
	const unobserve = jest.fn();
	const missingroot = jest.fn();
	const rootMargin = "";
	const thresholds: ReadonlyArray<number> = [];
	const disconnect = jest.fn();
	const takeRecords = jest.fn();
	const root = null;
	//missingroot, rootMargin, thresholds, disconnect, takeRecords
	window.IntersectionObserver = jest.fn(() => ({
		observe,
		unobserve,
		missingroot,
		rootMargin,
		thresholds,
		disconnect,
		takeRecords,
		root,
	}));
};
