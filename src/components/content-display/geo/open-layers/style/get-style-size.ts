import { SizeMap, StyleColor } from "../filters/types";

import {
	ApplyProportionalSize,
	applyProportionalSize,
} from "./apply-proprtional-size";
import { applySizeMap } from "./apply-size-map";

type GetStyleSize = {
	feature: { [x: string]: unknown };
	sizeMap?: SizeMap;
	proportionalSize?: Omit<ApplyProportionalSize, "object">;
	defaultSize?: number;
};

export const getStyleSize = ({
	feature,
	sizeMap,
	proportionalSize,
	defaultSize,
}: GetStyleSize) => {
	switch (true) {
		case !!proportionalSize:
			return applyProportionalSize({ ...proportionalSize, object: feature });
		case !!sizeMap:
			return applySizeMap({ sizeMap, object: feature });
		default:
			return defaultSize;
	}
};
