import { EmojiMap } from "../filters/types";
import Legend from "ol-ext/legend/Legend";
import { olLegendItemOptions } from "ol-ext/legend/Item";
import { Style } from "ol/style";
import { createStyleText } from "../style/text/style-text";
// create Map Items
export const createEmojiMapLegend = ({ filter, map }: EmojiMap) => {
	// Again margin needs to grow with maxSize
	const emojiMapLegend = new Legend({ margin: 10 });
	emojiMapLegend.addItem({ title: `Icon Map` });

	map.forEach(({ value, shape, key, code }) => {
		const item: olLegendItemOptions = {
			// Force to string but really?
			title: value.toString(),
			typeGeom: "Point",
			style: new Style({
				text: createStyleText({ type: shape, text: code, scale: 2.5 }),
			}),
		};

		emojiMapLegend.addItem(item as olLegendItemOptions);
	});

	return emojiMapLegend;
};
