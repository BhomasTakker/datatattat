import { filterSwitch } from "../filters/apply-filters";
import { ColorMap, StyleColor } from "../filters/types";

export type ApplyColorMap = {
	colorMap: ColorMap;
	object: {
		[x: string]: any;
	};
};

export const applyColorMap = ({ colorMap, object }: ApplyColorMap) => {
	const { filter, map } = colorMap;

	let retColor: StyleColor = [0, 0, 0, 0];

	// There is a way better way of doing this
	// I mean RxJS
	map.forEach(({ value, key, color }) => {
		console.log({ test: object[key], value });
		if (filterSwitch(filter, object[key], value)) {
			console.log("RET ", { color });
			retColor = color;
		}
	});
	return retColor;
};
