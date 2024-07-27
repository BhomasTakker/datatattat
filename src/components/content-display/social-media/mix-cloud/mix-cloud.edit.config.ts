import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { MixCloudEmbedType } from "./mix-cloud.config";

const routeInput = {
	type: EditInputs.text,
	id: "route",
	label: "route",
	info: "route",
};

const routeOptions = [routeInput];

type MixCloudVariantProps = typeof routeOptions;

const mixCloudVariantMap = new Map<string, MixCloudVariantProps>([
	[MixCloudEmbedType.route, routeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [MixCloudEmbedType.route],
	// optionId: "embedObject",
	label: "Content Type",
	info: "MixCloud ContentType",
	optionsMap: mixCloudVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "mixCloudRoot",
};

export const MIX_CLOUD_ROOT = [contentSelect, setQueryId];
