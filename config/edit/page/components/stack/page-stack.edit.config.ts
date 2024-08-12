import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { ScreenWidth } from "@/src/hooks/useWidth";

export enum StackVariant {
	column = "column",
	row = "row",
}

const stackVariantOptions = [StackVariant.column, StackVariant.row];

const columnOptions: any[] = [
	// {
	// 	id: "columns",
	// 	type: EditInputs.number,
	// 	max: 4,
	// 	min: 1,
	// 	label: "Max columns",
	// 	info: "Number of stack columns when full screen.",
	// },
];

const rowOptions = [
	{
		id: `columns_${ScreenWidth.XS}`,
		type: EditInputs.number,
		max: 9,
		min: 1,
		label: "Columns per row (XS)",
		info: "Max number of columns on each row. Applies when full screen.",
	},
	{
		id: `columns_${ScreenWidth.SM}`,
		type: EditInputs.number,
		max: 9,
		min: 1,
		label: "Columns per row (SM)",
		info: "Max number of columns on each row. Applies when full screen.",
	},
	{
		id: `columns_${ScreenWidth.MD}`,
		type: EditInputs.number,
		max: 9,
		min: 1,
		label: "Columns per row (MD)",
		info: "Max number of columns on each row. Applies when full screen.",
	},
	{
		id: `columns_${ScreenWidth.LG}`,
		type: EditInputs.number,
		max: 9,
		min: 1,
		label: "Columns per row (LG)",
		info: "Max number of columns on each row. Applies when full screen.",
	},
	{
		id: `columns_${ScreenWidth.XL}`,
		type: EditInputs.number,
		max: 9,
		min: 1,
		label: "Columns per row (XL)",
		info: "Max number of columns on each row. Applies when full screen.",
	},
];

type StackVariantProps = typeof columnOptions | typeof rowOptions;

const stackVariantMap = new Map<string, StackVariantProps>([
	[StackVariant.row, rowOptions],
	[StackVariant.column, columnOptions],
]);

export const STACK = {
	id: "stack",
	info: "stack",
	title: "Stack",
	// if used then type it etc
	// components: "CONTENT:COMPONENTS",
	props: [
		{
			type: EditInputs.objectSelect,
			id: "direction",
			label: "Stack Direction",
			info: "Which way should the stack flow",
			options: stackVariantOptions,
			optionsMap: stackVariantMap,
		},
	],
} as const;
