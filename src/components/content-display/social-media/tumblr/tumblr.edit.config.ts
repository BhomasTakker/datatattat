import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { TumblrEmbedType } from "./tumblr.config";

// const userInput = {
// 	type: EditInputs.text,
// 	id: "username",
// 	label: "username",
// 	info: "username",
// };

const postInput = {
	type: EditInputs.text,
	id: "post",
	label: "post",
	info: "post",
};

const postOptions = [postInput];

type TumblrVariantProps = typeof postOptions;

const tumblrVariantMap = new Map<string, TumblrVariantProps>([
	[TumblrEmbedType.post, postOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [TumblrEmbedType.post],

	label: "Content Type",
	info: "Tumblr ContentType",
	optionsMap: tumblrVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "tumblrRoot",
};

export const TUMBLR_ROOT = [contentSelect, setQueryId];
