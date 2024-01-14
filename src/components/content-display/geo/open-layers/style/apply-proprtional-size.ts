export type ApplyProportionalSize = {
	key: string;
	minValue: number;
	maxValue: number;
	minSize: number;
	maxSize: number;

	object: {
		[x: string]: any;
	};
};

// numerical only
export const applyProportionalSize = ({
	key,
	object,
	minValue,
	maxValue,
	minSize,
	maxSize,
}: ApplyProportionalSize) => {
	const value = object[key];
	const maxPossibleValue = maxValue - minValue;
	const valuePercentage = (value / maxPossibleValue) * 100;
	const maxPossibleSize = maxSize - minSize;

	const size = (maxPossibleSize / 100) * valuePercentage + minSize;

	// console.log({ test: object[key], value });

	return size;
};
