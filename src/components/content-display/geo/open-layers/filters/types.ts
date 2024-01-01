import { StyleShapes } from "../style/style-shapes";

export type FilterValue = string | number;

export type FilterTypes =
	| ">"
	| "<"
	| "="
	| "greaterThan"
	| "lessThan"
	| "equals";
// within, contains, <=, >=,

// should be string and [0,0,0] etc?
export type StyleColor = [number, number, number, number];
export type Filter = {
	filter: FilterTypes;
	value: FilterValue;
	key: string;
};

export type ApplyFilters = {
	filters: Filter[];
	object: { [x: string]: any };
};

export type FilterMap = {
	filter: FilterTypes;
	map: Omit<Filter, "filter">[];
};

export type ColorMap = {
	filter: FilterTypes;
	// This is not nice - change me
	map: Omit<Filter & { color: StyleColor }, "filter">[];
};

export type SizeMap = {
	filter: FilterTypes;
	// This is not nice - change me
	map: Omit<Filter & { size: number }, "filter">[];
};

// export type ProportionalSize = {
// 	filter: Omit<FilterTypes, "=" | "equals">;
// 	// This is not nice - change me
// 	map: Omit<Filter & { size: number }, "filter">[];
// };

export type ShapeMap = {
	filter: FilterTypes;
	// This is not nice - change me
	map: Omit<Filter & { shape: StyleShapes }, "filter">[];
};

type IconOptions = {
	shape: "Icon";
	src: string;
	size?: number;
};

export type IconMap = {
	filter: FilterTypes;
	// This is not nice - change me
	map: Omit<Filter & IconOptions, "filter">[];
};

type EmojiOptions = {
	shape: "Emoji";
	code: string;
	scale?: number;
};
export type EmojiMap = {
	filter: FilterTypes;
	// This is not nice - change me
	map: Omit<Filter & EmojiOptions, "filter">[];
};
