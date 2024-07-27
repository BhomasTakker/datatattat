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

type XVariantProps = typeof profileOptions | typeof postOptions;

const xVariantMap = new Map<string, XVariantProps>([
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
	optionsMap: xVariantMap,
};

const theme = {
	type: EditInputs.select,
	id: "theme",
	label: "Theme",
	key: "theme",
	options: ["light", "dark"],
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "xRoot",
};

export const X_ROOT = [contentSelect, theme, setQueryId];
