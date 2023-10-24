//https://storybook.js.org/docs/7.0/react/writing-stories/introduction
//https://storybook.js.org/blog/writing-stories-in-typescript/
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Meta, StoryObj } from "@storybook/react";
import { ScreenController } from "../../layout/screen/ScreenController";

import { Center } from "../../layout/center/Center";
import { LanguageSelector } from "./LanguageSelector";
import { Box } from "@mui/material";

export default {
	title: "Components/LanguageSelector",
	component: LanguageSelector,
	decorators: [
		(story) => (
			<Provider store={store}>
				<Center>
					<ScreenController>{story()}</ScreenController>
				</Center>
			</Provider>
		),
	],
	parameters: {
		//set backgrounds for just this story
		// backgrounds: {
		// 	default: "light",
		// 	values: [
		// 		{ name: "light", value: "#00aced" },
		// 		{ name: "dark", value: "#3b5998" },
		// 	],
		// },
	},
} as Meta;

export const Primary: StoryObj = () => <LanguageSelector />;
Primary.args = {};
Primary.storyName = "Language Selector";
Primary.parameters = {
	backgrounds: { default: "light" },
};
