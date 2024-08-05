import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";

// Add in full width
// to bypass any set content Size
// And take up the full width / full width with fade/etc
enum MediDisplayStyles {
	default = "default",
	sticky = "sticky",
}

const mediaDisplayStyleOptions = [
	MediDisplayStyles.default,
	MediDisplayStyles.sticky,
];

export const DISPLAY_PLAYER = {
	id: "DisplayPlayer",
	info: "DisplayPlayer",
	title: "Display Player",
	withObject: {},

	props: [
		...COMPONENT_DETAILS,
		{
			id: "style",
			type: EditInputs.select,
			label: "Component Style",
			options: mediaDisplayStyleOptions,
			info: "Select component style",
		},
		{
			type: EditInputs.title,
			title: "Player Props",
		},
		{
			id: "id",
			type: EditInputs.text,
			label: "Player Id",
			info: "DisplayerId",
		},
		{
			id: "url",
			type: EditInputs.text,
			label: "Media Url",
			info: "MediaPlayerUrl",
		},
	],
};
