import { EditInputs } from "../../inputs/input.map";
import OpenGraphEditObject from "./open-graph-edit-input.json";
import TwitterCardEditObject from "./twitter-card-edit-input.json";

// should just be a json?
export const META_CONFIG = {
	id: "Meta",
	info: "Meta",
	title: "Meta",

	props: [
		{
			type: EditInputs.title,
			title: "Meta Properties",
		},
		{
			id: "pageTitle",
			type: EditInputs.text,
			label: "Page Title",
			info: "The title used in the tab of the web page. Also used and displayed in search engines. See wesdrfghjk for more.",
		},
		{
			id: "favIcons",
			type: EditInputs.array,
			label: "FavIcons",
			info: "Array of av icons for sizes etc",
			title: "Add Fav Icon",
			// We need to allow an object 'shape'
			// an input-list and a 'props' array
			input: {
				id: "favIcons",
				type: EditInputs.inputList,
				label: "Fav Icons",
				info: "The page tab icon",
				inputs: [
					{
						id: "rel",
						type: EditInputs.select,
						label: "Rel",
						info: "icon or apple-touch-icon-precomposed",
						defaultValue: "icon",
						options: ["icon", "apple-touch-icon-precomposed"],
					},
					{
						id: "type",
						type: EditInputs.select,
						label: "Source type",
						info: "image/png",
						defaultValue: "image/png",
						options: ["image/png", "image/jpeg"],
					},
					{
						id: "href",
						type: EditInputs.text,
						label: "href",
						info: "The asset url.  The path to the asset",
					},
					{
						id: "sizes",
						type: EditInputs.select,
						label: "Sizes",
						info: "Different Image for each required size - select any to use one size for all.",
						defaultValue: "any",
						options: [
							"any",
							"16x16",
							"32x32",
							"36x36",
							"48x48",
							"57x57",
							"60x60",
							"72x72",
							"76x76",
							"96x96",
							"114x114",
							"120x120",
							"128x128",
							"144x144",
							"152x152",
							"180x180",
							"192x192",
							"384x384",
							"512x512",
						],
					},
				],
			},
		},
		OpenGraphEditObject,
		TwitterCardEditObject,
	],
};
