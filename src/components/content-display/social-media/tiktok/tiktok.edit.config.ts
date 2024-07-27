import { EditInputs } from "@/src/components/edit/inputs/input.map";

export enum EmbedType {
	profile = "profile",
	video = "video",
}

const profileInput = {
	type: EditInputs.text,
	id: "profile",
	label: "profile",
	info: "profile",
};
const videoInput = {
	type: EditInputs.text,
	id: "video",
	label: "video",
	info: "video",
};

// with tiktok you can add video controls
// so create a playing display

const profileOptions = [profileInput];

const videoOptions = [profileInput, videoInput];

type TikTokVariantProps = typeof profileOptions | typeof videoOptions;

const tikTokVariantMap = new Map<string, TikTokVariantProps>([
	[EmbedType.profile, profileOptions],
	[EmbedType.video, videoOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: ["profile", "video"],
	// optionId: "embedObject",
	label: "Content Type",
	info: "TikTokContentType",
	optionsMap: tikTokVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "tikTokRoot",
};

export const TIKTOK_ROOT = [contentSelect, setQueryId];
