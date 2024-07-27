import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { VimeoEmbedType } from "./vimeo.config";
// Theres a lot more controls available
// https://developer.vimeo.com/api/oembed/videos

const videoInput = {
	type: EditInputs.text,
	id: "video",
	label: "video",
	info: "video",
};

const channelInput = {
	type: EditInputs.text,
	id: "channel",
	label: "channel",
	info: "channel",
};

const groupInput = {
	type: EditInputs.text,
	id: "group",
	label: "group",
	info: "group",
};

const showcaseInput = {
	type: EditInputs.text,
	id: "showcase",
	label: "showcase",
	info: "showcase",
};

const onDemandInput = {
	type: EditInputs.text,
	id: "onDemand",
	label: "onDemand id",
	info: "onDemand",
};

const videoOptions = [videoInput];
const groupOptions = [groupInput, videoInput];
const showcaseOptions = [showcaseInput, videoInput];
const channelOptions = [channelInput, videoInput];
const onDemandOptions = [onDemandInput, videoInput];

type VimeoVariantProps =
	| typeof videoOptions
	| typeof groupOptions
	| typeof showcaseOptions
	| typeof channelOptions
	| typeof onDemandOptions;

const vimeoVariantMap = new Map<string, VimeoVariantProps>([
	[VimeoEmbedType.video, videoOptions],
	[VimeoEmbedType.channelVideo, channelOptions],
	[VimeoEmbedType.groupVideo, groupOptions],
	[VimeoEmbedType.showcaseVideo, showcaseOptions],
	[VimeoEmbedType.onDemandVideo, onDemandOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [
		VimeoEmbedType.video,
		VimeoEmbedType.channelVideo,
		VimeoEmbedType.groupVideo,
		VimeoEmbedType.showcaseVideo,
		VimeoEmbedType.onDemandVideo,
	],
	// optionId: "embedObject",
	label: "Content Type",
	info: "Vimeo ContentType",
	optionsMap: vimeoVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "vimeoRoot",
};

export const VIMEO_ROOT = [contentSelect, setQueryId];
