import { filterSwitch } from "../filters/apply-filters";
import { IconMap, ShapeMap } from "../filters/types";

type ApplyIconMap = {
	shapeMap: IconMap;
	object: {
		[x: string]: any;
	};
};

export const applyIconMap = ({ shapeMap, object }: ApplyIconMap) => {
	const { filter, map } = shapeMap;

	let retShape = {};

	map.forEach(({ value, key, src, size }) => {
		console.log({ test: object[key], value });
		if (filterSwitch(filter, object[key], value)) {
			retShape = {
				type: "Icon",
				src,
				size,
			};
		}
	});
	return retShape;
};
