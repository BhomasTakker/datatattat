import { EditInputs } from "../../inputs/input.map";

export const PROFILE_CONFIG = {
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
					id: "pageTitleVariant",
					type: EditInputs.text,
					label: "Title Style",
					info: "The title used in the tab of the web page. Also used and displayed in search engines. See wesdrfghjk for more.",
				},
			],
		},
		{
			id: "showPageDescription",
			type: EditInputs.show,
			label: "Show Page Description",
			info: "Create Page Data",
			inputs: [
				{
					id: "pageDescription",
					type: EditInputs.text,
					label: "Page Description",
					info: "The description used on the page itself.",
				},
				{
					id: "pageDescriptionStyle",
					type: EditInputs.text,
					label: "Description Style",
					info: "The description style.",
				},
			],
		},
	],
};
