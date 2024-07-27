import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { SoundCloudEmbedType } from "./sound-cloud.config";

const routeInput = {
	type: EditInputs.text,
	id: "route",
	label: "route",
	info: "route",
};

const routeOptions = [routeInput];

type SoundCloudVariantProps = typeof routeOptions;

const soundCloudVariantMap = new Map<string, SoundCloudVariantProps>([
	[SoundCloudEmbedType.route, routeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [SoundCloudEmbedType.route],
	// optionId: "embedObject",
	label: "Content Type",
	info: "SoundCloud ContentType",
	optionsMap: soundCloudVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "soundCloudRoot",
};

export const SOUND_CLOUD_ROOT = [contentSelect, setQueryId];
