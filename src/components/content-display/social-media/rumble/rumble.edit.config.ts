import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { RumbleEmbedType } from "./rumble.config";

const videoInput = {
	type: EditInputs.text,
	id: "video",
	label: "video",
	info: "video",
};

const videoOptions = [videoInput];

type RumbleVariantProps = typeof videoOptions;

const rumbleVariantMap = new Map<string, RumbleVariantProps>([
	[RumbleEmbedType.video, videoOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [RumbleEmbedType.video],
	// optionId: "embedObject",
	label: "Content Type",
	info: "Rumble ContentType",
	optionsMap: rumbleVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "rumbleRoot",
};

export const RUMBLE_ROOT = [contentSelect, setQueryId];
