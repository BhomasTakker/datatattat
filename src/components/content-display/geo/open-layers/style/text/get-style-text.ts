import { EmojiMap } from "../../filters/types";
import { applyEmojiMap } from "../apply-emoji-map";
import { CreateText } from "./style-text";

type GetStyleText = {
	feature: { [x: string]: unknown };
	emojiMap?: EmojiMap;
};

export const getStyleText = ({
	feature,
	emojiMap,
}: GetStyleText): CreateText | null => {
	switch (true) {
		// check if given text
		case !!emojiMap:
			return applyEmojiMap({ shapeMap: emojiMap, object: feature });
		default:
			return null;
	}
};
