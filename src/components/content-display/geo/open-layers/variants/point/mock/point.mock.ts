import {
	ShapeMap,
	IconMap,
	EmojiMap,
	SizeMap,
	ColorMap,
	Filter,
} from "../../../filters/types";
import { ApplyProportionalColor } from "../../../style/apply-proportional-color";
import { ApplyProportionalSize } from "../../../style/apply-proprtional-size";

const shapeMap: ShapeMap = {
	filter: "equals",
	map: [
		{
			value: "Leicester",
			key: "name",
			shape: "Circle",
		},
		{
			value: "Nottingham",
			key: "name",
			shape: "Square",
		},
		{
			value: "Derby",
			key: "name",
			shape: "Triangle",
		},
		{
			value: "Coventry",
			key: "name",
			shape: "Star",
		},
	],
};
// Potentially list available but this would be free and modifiable
const iconMap: IconMap = {
	filter: "equals",
	map: [
		{
			value: "Leicester",
			key: "name",
			shape: "Icon",
			size: 100,
			src: "https://img.icons8.com/search",
		},
		{
			value: "Nottingham",
			key: "name",
			shape: "Icon",
			size: 25,
			src: "https://img.icons8.com/car",
		},
		{
			value: "Derby",
			key: "name",
			shape: "Icon",
			size: 25,
			src: "https://img.icons8.com/dog",
		},
		{
			value: "Coventry",
			key: "name",
			shape: "Icon",
			size: 25,
			src: "https://img.icons8.com/cat",
		},
	],
};
// List of character sets for now
// https://gist.github.com/watzon/16b52766ec8283425e759077c5f363ba
const emojiMap: EmojiMap = {
	filter: "equals",
	map: [
		{
			value: "Leicester",
			key: "name",
			shape: "Emoji",
			code: "\uD83C\uDF1E",
			scale: 5,
		},
		{
			value: "Nottingham",
			key: "name",
			shape: "Emoji",
			code: "\ud83e\udd80",
			scale: 7,
		},
		{
			value: "Derby",
			key: "name",
			shape: "Emoji",
			code: "\u26f5",
			scale: 2.5,
		},
		{
			value: "Coventry",
			key: "name",
			shape: "Emoji",
			code: "\ud83d\udd70",
			scale: 1,
		},
	],
};
const sizeMap: SizeMap = {
	filter: "equals",
	map: [
		{
			value: "Leicester",
			key: "name",
			size: 25,
		},
		{
			value: "Nottingham",
			key: "name",
			size: 20,
		},
		{
			value: "Derby",
			key: "name",
			size: 15,
		},
		{
			value: "Coventry",
			key: "name",
			size: 10,
		},
	],
};

const sizeMap2: SizeMap = {
	filter: "<",
	// key here too?
	// That shouldn't be changing
	map: [
		{
			value: "100",
			key: "rank",
			size: 50,
		},
		{
			value: "80",
			key: "rank",
			size: 40,
		},
		{
			value: "60",
			key: "rank",
			size: 30,
		},
		{
			value: "40",
			key: "rank",
			size: 20,
		},
		{
			value: "20",
			key: "rank",
			size: 10,
		},
	],
};

const colorMap: ColorMap = {
	filter: "equals",
	map: [
		{
			value: "Leicester",
			key: "name",
			color: [255, 0, 0, 0.7],
		},
		{
			value: "Nottingham",
			key: "name",
			color: [0, 255, 0, 0.7],
		},
		{
			value: "Derby",
			key: "name",
			color: [255, 0, 255, 0.7],
		},
		{
			value: "Coventry",
			key: "name",
			color: [0, 0, 255, 0.7],
		},
	],
};

const colorMapGT: ColorMap = {
	filter: ">",
	// works as a filter also
	// < 21 omitted
	map: [
		{
			value: "20",
			key: "rank",
			color: [255, 0, 0, 0.7],
		},
		{
			value: "40",
			key: "rank",
			color: [0, 255, 0, 0.7],
		},
		{
			value: "60",
			key: "rank",
			color: [255, 0, 255, 0.7],
		},
		{
			value: "80",
			key: "rank",
			color: [0, 0, 255, 0.7],
		},
	],
};

const proportionalSize: Omit<ApplyProportionalSize, "object"> = {
	key: "rank",
	minSize: 0,
	maxSize: 100,
	minValue: 0,
	maxValue: 100,
};

const proportionalColor: Omit<ApplyProportionalColor, "object"> = {
	key: "rank",
	gradientStart: [77, 77, 77, 1],
	gradientEnd: [188, 188, 188, 1],
	minValue: 0,
	maxValue: 100,
};

const filter: Filter = {
	filter: "lessThan",
	value: 80,
	key: "rank",
};
const filter2: Filter = {
	filter: "greaterThan",
	value: 20,
	key: "rank",
};
const filters = [filter, filter2];

export const PointMock = {
	filters,
	shapeMap,
	iconMap,
	sizeMap,
	emojiMap,
	colorMap,
	proportionalColor,
	proportionalSize,
};
