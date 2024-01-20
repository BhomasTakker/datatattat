import { filterSwitch } from "../filters/apply-filters";
import { SizeMap } from "../filters/types";

type ApplySizeMap = {
	sizeMap: SizeMap;
	object: {
		[x: string]: any;
	};
};

export const applySizeMap = ({ sizeMap, object }: ApplySizeMap) => {
	const { filter, map } = sizeMap;

	let retSize = 0;

	// There is a way better way of doing this
	// I mean RxJS
	map.forEach(({ value, key, size }) => {
		if (filterSwitch(filter, object[key], value)) {
			retSize = size;
		}
	});
	return retSize;
};
