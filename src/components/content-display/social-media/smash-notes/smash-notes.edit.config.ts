import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { SmashNotesEmbedType } from "./smash-notes.config";

const routeInput = {
	type: EditInputs.text,
	id: "route",
	label: "route",
	info: "route",
};

const routeOptions = [routeInput];

type SmashNotesVariantProps = typeof routeOptions;

const smashNotesVariantMap = new Map<string, SmashNotesVariantProps>([
	[SmashNotesEmbedType.route, routeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [SmashNotesEmbedType.route],
	// optionId: "embedObject",
	label: "Content Type",
	info: "SmashNotes ContentType",
	optionsMap: smashNotesVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "smashNotesRoot",
};

export const SMASH_NOTES_ROOT = [contentSelect, setQueryId];
