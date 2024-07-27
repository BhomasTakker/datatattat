import { EditInputs } from "@/src/components/edit/inputs/input.map";

export enum BlueskyEmbedType {
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

const postOptions = [profileInput, postInput];

type BlueskyVariantProps = typeof postOptions;

const blueskyVariantMap = new Map<string, BlueskyVariantProps>([
	[BlueskyEmbedType.post, postOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: ["post"],
	// optionId: "embedObject",
	label: "Content Type",
	info: "BlueskyContentType",
	optionsMap: blueskyVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "blueskyRoot",
};

export const BLUESKY_ROOT = [contentSelect, setQueryId];
