import { filterSwitch } from "../filters/apply-filters";
import { EmojiMap } from "../filters/types";
import { CreateText } from "./text/style-text";

type ApplyEmojiMap = {
	shapeMap: EmojiMap;
	object: {
		[x: string]: any;
	};
};

export const applyEmojiMap = ({
	shapeMap,
	object,
}: ApplyEmojiMap): CreateText | null => {
	const { filter, map } = shapeMap;

	let ret = null;

	map.forEach(({ value, key, code, shape, ...rest }) => {
		console.log({ test: object[key], value });
		if (filterSwitch(filter, object[key], value)) {
			ret = { text: code, type: shape, ...rest };
		}
	});
	return ret;
};
