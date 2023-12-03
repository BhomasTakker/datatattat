import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";

export const DATA_TABLE = {
	id: "DataTable",
	info: "DataTable",
	title: "Data Table",

	props: [
		{
			type: "title",
			title: "Data Table Properties",
		},
		{
			id: "styleVariant",
			type: "select",
			// input array from somewhere
			options: ["basic", "striped", "crossed"],
			label: "Style Variant",
			info: "DataTableStyleVariant",
		},
		{
			id: "dataConversionVariant",
			type: "select",
			// input array from somewhere
			options: ["basic", "striped", "crossed"],
			label: "Data Conversion Variant",
			info: "test",
		},
		{
			id: "columnsVariant",
			type: "select",
			// input array from somewhere
			options: ["basic", "striped", "crossed"],
			label: "Columns Variant",
			info: "test",
		},
		{
			id: "useSorting",
			type: "switch",
			defaultValue: false,
			label: "Use Sorting?",
			info: "test",
		},
		{
			id: "useGlobalFilter",
			type: "switch",
			defaultValue: false,
			label: "Use Table Filter?",
			info: "test",
		},
		{
			id: "useColumnFilter",
			type: "switch",
			defaultValue: false,
			label: "Use Column Filter?",
			info: "test",
		},
		{
			id: "usePagination",
			type: "switch",
			defaultValue: false,
			label: "Use Pagination?",
			info: "test",
		},
		{
			info: "",
			type: "number",
			id: "pageSize",
			label: "Page Size",
			// key: "gridColumns",// what is dis?
		},
		{
			id: "pageSizeOptions",
			type: "text",
			label: "Temp Page Size Options",
			info: "Properly sort this out etc",
		},
		{
			id: "allRowsOption",
			type: "switch",
			defaultValue: false,
			label: "Show All Rows Option?",
			info: "test",
		},
		{
			id: "showCaption",
			type: "switch",
			defaultValue: false,
			label: "Show Caption?",
			info: "test",
		},
		{
			id: "caption",
			type: "text",
			label: "Caption",
			info: "test",
		},
		{
			id: "stickyHeader",
			type: "switch",
			defaultValue: true,
			label: "Sticky Header?",
			info: "test",
		},
	],
};
