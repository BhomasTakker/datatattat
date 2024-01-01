import { StyleColor } from "../filters/types";

export type ApplyProportionalColor = {
	key: string;
	minValue: number;
	maxValue: number;
	gradientStart: StyleColor;
	gradientEnd: StyleColor;

	object: {
		[x: string]: any;
	};
};

// numerical only
export const applyProportionalColor = ({
	key,
	object,
	minValue,
	maxValue,
	gradientStart,
	gradientEnd,
}: ApplyProportionalColor): StyleColor => {
	const value = object[key];
	const maxPossibleValue = maxValue - minValue;
	const valuePercentage = (value / maxPossibleValue) * 100;

	// Not 100% this is correct
	// Need test with proper color ranges
	const color = gradientStart.map((start, i) => {
		const end = gradientEnd[i];
		if (end == start) {
			return start;
		}
		const maxPossibleColor = end - start;
		return (maxPossibleColor / 100) * valuePercentage + start;
	});

	console.log("applyGraduantColor", { color });

	return color as StyleColor;
};
