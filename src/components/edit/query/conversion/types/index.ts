import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";

export const CONVERSION_TYPES = {
	TRANSFORM: "TRANSFORM",
} as const;

export const ITERATOR_CONVERSION_TYPES = {
	...CONVERSION_TYPES,
	FILTER: "FILTER",
	SORT: "SORT",
} as const;

export type Conversion = any;
export type Conversions = Conversion[];

export type SelectConversion = BaseEditProps & {
	value: string | undefined;
};
