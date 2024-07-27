import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { CodePenEmbedType } from "./codepen.config";

const routeInput = {
	type: EditInputs.text,
	id: "route",
	label: "route",
	info: "route",
};

const routeOptions = [routeInput];

type CodePenVariantProps = typeof routeOptions;

const codePenVariantMap = new Map<string, CodePenVariantProps>([
	[CodePenEmbedType.route, routeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [CodePenEmbedType.route],
	// optionId: "embedObject",
	label: "Content Type",
	info: "CodePen ContentType",
	optionsMap: codePenVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "codePenRoot",
};

export const CODEPEN_ROOT = [contentSelect, setQueryId];
