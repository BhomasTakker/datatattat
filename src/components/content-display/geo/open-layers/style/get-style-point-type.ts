// @ts-nocheck / FIX ME
import { EmojiMap, IconMap, ShapeMap } from "../filters/types";
import { applyIconMap } from "./apply-icon-map";
import { applyShapeMap } from "./apply-shape-map";

export type GetStylePointType = {
	shapeMap?: ShapeMap;
	iconMap?: IconMap;
	emojiMap?: EmojiMap;
	feature: {
		[x: string]: unknown;
	};
};

export const getStylePointType = ({
	shapeMap,
	iconMap,
	emojiMap,
	feature,
}: GetStylePointType) => {
	switch (true) {
		case !!shapeMap:
			// PointShape
			return applyShapeMap({ shapeMap, object: feature });
		case !!iconMap:
			return applyIconMap({ shapeMap: iconMap, object: feature });
		// case !!emojiMap:
		// 	return applyEmojiMap({ shapeMap: emojiMap, object: feature });
		default: //what are we returning here
	}
};
