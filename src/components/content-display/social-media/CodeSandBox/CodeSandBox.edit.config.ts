import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { CodeSandBoxEmbedType } from "./CodeSandBox.config";

const routeInput = {
	type: EditInputs.text,
	id: "route",
	label: "route",
	info: "route",
};

const routeOptions = [routeInput];

type CodeSandBoxVariantProps = typeof routeOptions;

const codeSandBoxVariantMap = new Map<string, CodeSandBoxVariantProps>([
	[CodeSandBoxEmbedType.route, routeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [CodeSandBoxEmbedType.route],
	// optionId: "embedObject",
	label: "Content Type",
	info: "CodeSandBox ContentType",
	optionsMap: codeSandBoxVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "codeSandBoxRoot",
};

export const CODE_SANDBOX_ROOT = [contentSelect, setQueryId];
