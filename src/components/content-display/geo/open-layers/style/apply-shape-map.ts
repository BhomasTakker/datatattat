import { filterSwitch } from "../filters/apply-filters";
import { ShapeMap } from "../filters/types";

type ApplyShapeMap = {
	shapeMap: ShapeMap;
	object: {
		[x: string]: any;
	};
};

export const applyShapeMap = ({ shapeMap, object }: ApplyShapeMap) => {
	const { filter, map } = shapeMap;

	let retShape = null;

	// There is a way better way of doing this
	// I mean RxJS
	map.forEach(({ value, key, shape }) => {
		if (filterSwitch(filter, object[key], value)) {
			retShape = shape;
		}
	});
	return { type: retShape };
};
