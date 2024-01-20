import { ColorMap, Filter, SizeMap } from "../../../filters/types";
import { ApplyProportionalColor } from "../../../style/apply-proportional-color";
import { ApplyProportionalSize } from "../../../style/apply-proprtional-size";

const colorMap: ColorMap = {
	filter: "equals",
	map: [
		{
			value: "River Zimbabwe",
			key: "name",
			color: [255, 0, 0, 0.7],
		},
		{
			value: "Angolan River",
			key: "name",
			color: [0, 255, 0, 0.7],
		},
		{
			value: "The Great Botswana",
			key: "name",
			color: [255, 0, 255, 0.7],
		},
		{
			value: "The Mighty Mpika",
			key: "name",
			color: [0, 0, 255, 0.7],
		},
		{
			value: "Mbanza-Ngungu",
			key: "name",
			color: [0, 255, 255, 0.7],
		},
	],
};

const sizeMap: SizeMap = {
	filter: "equals",
	map: [
		{
			value: "River Zimbabwe",
			key: "name",
			size: 10,
		},
		{
			value: "Angolan River",
			key: "name",
			size: 8,
		},
		{
			value: "The Great Botswana",
			key: "name",
			size: 6,
		},
		{
			value: "The Mighty Mpika",
			key: "name",
			size: 4,
		},
		{
			value: "Mbanza-Ngungu",
			key: "name",
			size: 2,
		},
	],
};

const proportionalColor: Omit<ApplyProportionalColor, "object"> = {
	key: "size",
	gradientStart: [255, 255, 255, 1],
	gradientEnd: [77, 255, 255, 1],
	minValue: 500,
	maxValue: 2000,
};

const proportionalSize: Omit<ApplyProportionalSize, "object"> = {
	key: "size",
	minSize: 0,
	maxSize: 25,
	minValue: 0,
	maxValue: 2500,
};

const filter: Filter = {
	filter: "lessThan",
	value: 2000,
	key: "size",
};
const filter2: Filter = {
	filter: "greaterThan",
	value: 600,
	key: "size",
};
const filters = [filter, filter2];
export const LineMapMock = {
	filters,
	colorMap,
	sizeMap,
	proportionalColor,
	proportionalSize,
};
