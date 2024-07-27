import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { YouTubeEmbedType } from "./youtube-config";

const videoInput = {
	type: EditInputs.text,
	id: "video",
	label: "video",
	info: "video",
};

const shortInput = {
	type: EditInputs.text,
	id: "short",
	label: "short",
	info: "short",
};

const listInput = {
	type: EditInputs.text,
	id: "list",
	label: "list",
	info: "list",
};

const videoOptions = [videoInput];
const listOptions = [listInput];
const shortOptions = [shortInput];

type YouTubeVariantProps =
	| typeof videoOptions
	| typeof listOptions
	| typeof shortOptions;

const youTubeVariantMap = new Map<string, YouTubeVariantProps>([
	[YouTubeEmbedType.video, videoOptions],
	[YouTubeEmbedType.short, shortOptions],
	[YouTubeEmbedType.list, listOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [
		YouTubeEmbedType.video,
		YouTubeEmbedType.list,
		YouTubeEmbedType.short,
	],
	// optionId: "embedObject",
	label: "Content Type",
	info: "YouTube ContentType",
	optionsMap: youTubeVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "youTubeRoot",
};

export const YOUTUBE_ROOT = [contentSelect, setQueryId];
