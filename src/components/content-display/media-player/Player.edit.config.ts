//  filterObjectByKeys(EDIT_WITH, acceptedValues),

import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";
import { EditInputs } from "../../edit/inputs/input.map";

export const MEDIA_PLAYER = {
	id: "MediaPlayer",
	info: "MediaPlayer",
	title: "Media Player",
	withObject: {},

	props: [
		...COMPONENT_DETAILS,
		{
			type: EditInputs.title,
			title: "Player Props",
		},
		{
			id: "media",
			type: EditInputs.select,
			// get from somewhere
			options: ["video", "audio"],
			// optionId: "mediaType",
			label: "Player Type",
			info: "MediaPlayerType",
		},
		{
			id: "url",
			type: EditInputs.text,
			label: "Media Url",
			info: "MediaPlayerUrl",
		},
	],
};
