import { EditInputs } from "../../inputs/input.map";

export const PROFILE_CONFIG = {
	// This isn't meta...
	id: "Meta",
	info: "Meta",
	title: "Meta",

	props: [
		{
			type: EditInputs.title,
			title: "Page Properties",
		},
		{
			id: "showPageTitle",
			type: EditInputs.show,
			label: "Show Page Title",
			info: "Create Page Data",
			inputs: [
				{
					id: "pageTitle",
					type: EditInputs.text,
					label: "Page Title",
					info: "The title used in the tab of the web page. Also used and displayed in search engines. See wesdrfghjk for more.",
				},
				{
					id: "align",
					type: EditInputs.select,
					label: "Align",
					options: ["left", "center", "right"],
					info: "Title alignment.",
				},
			],
		},
	],
};
