import { Feature } from "ol";
import { ColorMap, Filter } from "../../../filters/types";
import { ApplyProportionalColor } from "../../../style/apply-proportional-color";
import { transform } from "ol/proj";
import { Point, Polygon } from "ol/geom";

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

const attributes = {
	name: "Leicester",
	bar: "foo",
	wahwah: "woowoo",
	score: 0.6,
	rank: 75,
};

// Figure out or rem - points are far more likely
// Not working :()
const createFeature = () => {
	return new Feature({
		geometry: new Polygon([
			[
				[11.852132950632637, -17.17559188963027],
				[15.6884190829482, -28.498698388783247],
				[19.511230992915074, -28.85018047206215],
				[21.20061858837039, -17.803784140414393],
				[11.852132950632637, -17.17559188963027],
			],
		]),
		...attributes,
	});
};

export const ChoroplethMock = {
	filters,
	colorMap,
	proportionalColor,
	createFeature,
};
