import Feature from "ol/Feature";
import Style from "ol/style/Style";
import { CreateShape, createShape } from "./style-shapes";
import { applyFilters } from "../filters/apply-filters";
import {
	ColorMap,
	EmojiMap,
	Filter,
	IconMap,
	ShapeMap,
	SizeMap,
} from "../filters/types";
import { createPointStyle } from "./points/create-point-style";

type CreateStyleFunction = {
	// icon, image, etc? same thing just rename
	shape: CreateShape;
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

const defaultShape: CreateShape = {
	size: 10,
	type: "Circle",
};

const defaultPointStyle = new Style({
	image: createShape(defaultShape),
});

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
			scale: 2.5,
		},
		{
			value: "Nottingham",
			key: "name",
			shape: "Emoji",
			code: "\ud83e\udd80",
			scale: 2.5,
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
			scale: 2.5,
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
// There are more
type Geometry = "Point" | "Line" | "Polygon";
const filterFeature = (feature: Feature, geometry: Geometry) => {
	const featureGeometry = feature.getGeometry()?.getType();
	return featureGeometry == geometry;
};

// At the moment this is doing more than style
// We're filtering and applying the style only if
export const createPointStyleFunction =
	({ shape }: CreateStyleFunction) =>
	(feature: Feature) => {
		if (!filterFeature(feature, "Point")) {
			return;
		}

		const properties = feature.getProperties();
		console.log({ properties });
		// This will all NOT be performant
		// For large datasets you want to look at webGL layers
		// filter, filter2
		if (!applyFilters({ filters: [], object: properties })) {
			return;
		}

		const style = createPointStyle({
			shape,
			properties,
			colorMap,
			// colorMap: colorMapGT,
			sizeMap,
			// sizeMap: sizeMap2,
			shapeMap,
			iconMap,
			emojiMap,
		});
		// argument would be to not do this here but to return the style
		feature.setStyle([style || defaultPointStyle]);
	};
