import { ColorMap, Filter } from "../../../filters/types";
import { ApplyProportionalColor } from "../../../style/apply-proportional-color";

const colorMap: ColorMap = {
	filter: "equals",
	map: [
		{
			value: "Namibia",
			key: "name",
			color: [255, 0, 0, 0.7],
		},
		{
			value: "South Africa",
			key: "name",
			color: [0, 255, 0, 0.7],
		},
		{
			value: "Botswana",
			key: "name",
			color: [255, 0, 255, 0.7],
		},
		{
			value: "Zimbabwe",
			key: "name",
			color: [0, 0, 255, 0.7],
		},
		{
			value: "Madegascar",
			key: "name",
			color: [0, 255, 255, 0.7],
		},
		{
			value: "Mozambique",
			key: "name",
			color: [255, 255, 0, 0.7],
		},
	],
};

const proportionalColor: Omit<ApplyProportionalColor, "object"> = {
	key: "population_density",
	gradientStart: [77, 255, 255, 1],
	gradientEnd: [255, 255, 255, 1],
	minValue: 0,
	maxValue: 1500,
};
const filter: Filter = {
	filter: "lessThan",
	value: 1200,
	key: "population_density",
};
const filter2: Filter = {
	filter: "greaterThan",
	value: 500,
	key: "population_density",
};
const filters = [filter, filter2];
export const ChoroplethMock = {
	filters,
	colorMap,
	proportionalColor,
};
