import { EditInputs } from "../../inputs/input.map";

const styleTitle = {
	type: EditInputs.title,
	title: "Style Properties",
};

const pageSizes = ["xs", "sm", "md", "lg", "xl", "full"];

const pageSize = {
	id: "size",
	type: EditInputs.select,
	label: "Page Size",
	info: "Page Size Edit Input",
	defaultValue: "full",
	options: pageSizes,
};

export const STYLE_CONFIG = {
	id: "Style",
	info: "Style",
	title: "Style",

	props: [styleTitle, pageSize],
};
