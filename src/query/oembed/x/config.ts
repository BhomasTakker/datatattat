import { EditInputs } from "@/src/components/edit/inputs/input.map";

export enum EmbedType {
	profile = "profile",
	post = "post",
}

const profileInput = {
	type: EditInputs.text,
	id: "profile",
	label: "profile",
	info: "profile",
};

const postInput = {
	type: EditInputs.text,
	id: "post",
	label: "post",
	info: "post",
};
const limit = {
	type: EditInputs.number,
	id: "limit",
	label: "Limit",
	key: "limit",
};
const profileOptions = [profileInput, limit];

const postOptions = [postInput];

type StackVariantProps = typeof profileOptions | typeof postOptions;

const stackVariantMap = new Map<string, StackVariantProps>([
	[EmbedType.profile, profileOptions],
	[EmbedType.post, postOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: ["profile", "post"],
	// optionId: "embedObject",
	label: "Content Type",
	info: "XContentType",
	optionsMap: stackVariantMap,
};

// https://developer.x.com/en/docs/twitter-for-websites/supported-languages
const lang = {
	type: EditInputs.select,
	id: "lang",
	label: "Language",
	key: "lang",
	options: [],
};

const theme = {
	type: EditInputs.select,
	id: "theme",
	label: "Theme",
	key: "theme",
	options: ["light", "dark"],
};

const url = {
	type: EditInputs.text,
	id: "url",
	label: "url",
};

const params = [contentSelect, url, theme];

// No longer used
export const X_ROOT = {
	id: "x_root",
	label: "Select Embed",

	queryId: "xRoot",

	params, // required?

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	conversions: {},
};
