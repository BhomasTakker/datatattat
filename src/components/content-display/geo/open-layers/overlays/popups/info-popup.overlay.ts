import { Map } from "ol";
import PopupFeature from "ol-ext/overlay/PopupFeature";
import { singleClick } from "ol/events/condition";
import { Select } from "ol/interaction";

type CreateInfoPopup = {
	map: Map;
	keys: string[];
};

var select = new Select({
	hitTolerance: 5,
	multi: true,
	condition: singleClick,
});

// Basic popups might be okay like this
// I feel actual controls like a play video overlay
// Needs to be React and I'm not sure we could use this AND react
///////////////////////////////////////////////
// Basic and easy
// Basic feature data popup
// Create a number of popups and select by id
export const createInfoPopup = ({ map }: CreateInfoPopup) => {
	// we should remove too - on
	map.addInteraction(select);

	const popup = new PopupFeature({
		// need take a proper look at this - we can add our own
		// But we have to use the given structure (for now?)
		popupClass: "default anim",
		select: select,
		canFix: true,
		template(f) {
			// Well this does not seem legit!
			const keys = f.getKeys().filter((key) => key !== "geometry");
			const attributes = Object.assign(
				{},
				...keys.map((key) => ({ [key]: key }))
			);

			return {
				title: "name",
				attributes: {
					// just basics I guess
					...attributes,
				},
			};
		},
	});

	map.addOverlay(popup);
};
