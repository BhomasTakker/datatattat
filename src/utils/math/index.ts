// Math.misc?
/* Create a simple unique number */
export const uniqueNumber = () => {
	return Date.now() + Math.random();
};

// seed? should be 1?, 10, 100, 1000, 10000, etc for accurate decimal places
export const decimalPlace = (num: number, seed: number) => {
	return Math.round((num + Number.EPSILON) * seed) / seed;
};
