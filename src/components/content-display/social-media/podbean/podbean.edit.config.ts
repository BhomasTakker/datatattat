import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { PodbeanEmbedType } from "./podbean.config";

const usernameInput = {
	type: EditInputs.text,
	id: "username",
	label: "username",
	info: "username",
};

const episodeInput = {
	type: EditInputs.text,
	id: "episode",
	label: "episode",
	info: "episode",
};

const episodeOptions = [usernameInput, episodeInput];

type PodbeanVariantProps = typeof episodeOptions;

const podbeanVariantMap = new Map<string, PodbeanVariantProps>([
	[PodbeanEmbedType.episode, episodeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [PodbeanEmbedType.episode],
	// optionId: "embedObject",
	label: "Content Type",
	info: "Podbean ContentType",
	optionsMap: podbeanVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "podbeanRoot",
};

export const PODBEAN_ROOT = [contentSelect, setQueryId];
