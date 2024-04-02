import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";

export const CONVERSION_TYPES = {
	TRANSFORM: "TRANSFORM",
} as const;

export const ITERATOR_CONVERSION_TYPES = {
	...CONVERSION_TYPES,
	FILTER: "FILTER",
	SORT: "SORT",
	GROUP: "GROUP",
	BIN: "BIN",
	SUMMARIZE: "SUMMARIZE",
} as const;

export type Conversion = any;
export type Conversions = Conversion[];

export type SelectConversion = BaseEditProps & {
	value: string | undefined;
	props: any;
};

type DefaultConversions = {
	id: string;
	type: "TRANSFORM" | "FILTER" | "SORT" | "GROUP" | "BIN" | "SUMMARIZE";
};

// these should be the same thing
export type ConversionObject = {
	id?: string;
	iterable?: boolean;
	map: unknown;
	defaultConversions: DefaultConversions[];
	sort?: object;
	filter?: object;
	transform?: object;
	group?: object;
	bin?: object;
	summarize?: object;
};
