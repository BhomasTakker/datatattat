// https://openlayers.org/en/latest/examples/regularshape.html
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon";
import RegularShape from "ol/style/RegularShape";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";

// We need Icons and Images too
// Text?
export type StyleShapes =
	| "Circle"
	| "Square"
	| "Triangle"
	| "Star"
	| "Cross"
	| "X"
	| "Icon"
	| "Emoji";

// Dupe / filters
export type StyleColor = string | [number, number, number, number];

// angle, rotation, scale
export type CreateStyleCircle = {
	fillColor?: StyleColor;
	strokeColor?: StyleColor;
	size?: number;
};

const defaultColor: StyleColor = [0, 0, 0, 0.5];
const defaultStrokeColor: StyleColor = [0, 0, 0, 0];
const defaultSize = 10;

export const createStyleCircle = ({
	fillColor = defaultColor,
	strokeColor = defaultStrokeColor,
	size = defaultSize,
}: CreateStyleCircle) =>
	new Circle({
		fill: new Fill({ color: fillColor }),
		radius: size,
		stroke: new Stroke({ color: strokeColor }),
	});

export type CreateStyleShape = {
	fillColor?: StyleColor;
	strokeColor?: StyleColor;
	size?: number;
	// radius?: number;
	// radius1?: number;
	// radius2?: number;
	// angle?: number;
	// rotation?: number;
};

export const createStyleTriangle = ({
	fillColor = defaultColor,
	strokeColor = defaultStrokeColor,
	size = defaultSize,
}: CreateStyleShape) =>
	new RegularShape({
		fill: new Fill({ color: fillColor }),
		stroke: new Stroke({ color: strokeColor }),
		points: 3,
		radius: size,
	});

export const createStyleSquare = ({
	fillColor = defaultColor,
	strokeColor = defaultStrokeColor,
	size = defaultSize,
}: CreateStyleShape) =>
	new RegularShape({
		fill: new Fill({ color: fillColor }),
		points: 4,
		stroke: new Stroke({ color: strokeColor }),
		radius: size,
		angle: Math.PI / 4,
	});

export const createStyleStar = ({
	fillColor = defaultColor,
	strokeColor = defaultStrokeColor,
	size = defaultSize,
}: CreateStyleShape) =>
	new RegularShape({
		fill: new Fill({ color: fillColor }),
		points: 5,
		stroke: new Stroke({ color: strokeColor }),
		radius1: size,
		radius2: size / 2,
	});

// These two are pretty bogus
export const createStyleCross = ({
	fillColor = defaultColor,
	strokeColor = defaultStrokeColor,
	size = defaultSize,
}: CreateStyleShape) =>
	new RegularShape({
		fill: new Fill({ color: fillColor }),
		stroke: new Stroke({ color: strokeColor }),
		points: 4,
		radius: size,
		radius2: 0,
	});

export const createStyleX = ({
	fillColor = defaultColor,
	strokeColor = defaultStrokeColor,
	size = defaultSize,
}: CreateStyleShape) =>
	new RegularShape({
		fill: new Fill({ color: fillColor }),
		stroke: new Stroke({ color: strokeColor }),
		points: 4,
		radius: size,
		radius2: 0,
		angle: Math.PI / 4,
	});

// Think need src || img
type CreateStyleIcon = {
	src?: string;
	img?: HTMLCanvasElement | HTMLImageElement | ImageBitmap;
	size?: number;
};
// img might be svg able? - is html element
export const createStyleIcon = ({ src, img, size = 30 }: CreateStyleIcon) =>
	new Icon({
		src,
		img,
		width: size,
		height: size,
	});

type CreateStyleEmoji = {
	code: string;
	scale?: number;
	rotation?: number;
};
// Maybe in a text thing
// getLabel etc
export const createStyleEmoji = ({ code, scale, rotation }: CreateStyleEmoji) =>
	new Text({
		text: code,
		justify: "center",
		scale,
		rotation,
	});
type AvailableShape =
	| CreateStyleShape
	| CreateStyleCircle
	| CreateStyleIcon
	| CreateStyleEmoji;
export type CreateShape = {
	type: StyleShapes;
} & AvailableShape;

export const createShape = ({ type, ...rest }: CreateShape) => {
	console.log("!!!!!!!!!!!!!!!!!!!!!", { type });
	switch (type) {
		case "Circle":
			return createStyleCircle(rest as CreateStyleCircle);
		case "Square":
			return createStyleSquare(rest as CreateStyleShape);
		case "Triangle":
			return createStyleTriangle(rest as CreateStyleShape);
		case "Star":
			return createStyleStar(rest as CreateStyleShape);
		case "Cross":
			return createStyleCross(rest as CreateStyleShape);
		case "X":
			return createStyleX(rest as CreateStyleShape);

		case "Icon":
			console.log("ICON", { rest });
			return createStyleIcon(rest as CreateStyleIcon);
		// case "Emoji":
		// 	return createStyleEmoji(rest as CreateStyleEmoji);
	}
};
