import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { DailyMotionEmbedType } from "./daily-motion.config";

const videoInput = {
	type: EditInputs.text,
	id: "video",
	label: "video",
	info: "video",
};

const videoOptions = [videoInput];

type DailyMotionVariantProps = typeof videoOptions;

const dailyMotionVariantMap = new Map<string, DailyMotionVariantProps>([
	[DailyMotionEmbedType.video, videoOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [DailyMotionEmbedType.video],
	// optionId: "embedObject",
	label: "Content Type",
	info: "DailyMotion ContentType",
	optionsMap: dailyMotionVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "dailyMotionRoot",
};

export const DAILY_MOTION_ROOT = [contentSelect, setQueryId];
