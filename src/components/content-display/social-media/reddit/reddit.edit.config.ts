import { EditInputs } from "@/src/components/edit/inputs/input.map";

export enum EmbedType {
	post = "post",
}

const groupInput = {
	type: EditInputs.text,
	id: "group",
	label: "group",
	info: "group",
};

const postInput = {
	type: EditInputs.text,
	id: "post",
	label: "post",
	info: "post",
};

const postOptions = [groupInput, postInput];

type RedditVariantProps = typeof postOptions;

const redditVariantMap = new Map<string, RedditVariantProps>([
	[EmbedType.post, postOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [EmbedType.post],
	// optionId: "embedObject",
	label: "Content Type",
	info: "RedditContentType",
	optionsMap: redditVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "redditRoot",
};

export const REDDIT_ROOT = [contentSelect, setQueryId];
