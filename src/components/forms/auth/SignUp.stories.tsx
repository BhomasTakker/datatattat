//https://storybook.js.org/docs/7.0/react/writing-stories/introduction
//https://storybook.js.org/blog/writing-stories-in-typescript/
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Meta, StoryObj } from "@storybook/react";
import { ScreenController } from "../../layout/screen/ScreenController";
import { SignUpForm } from "./SignUpForm";
import { Center } from "../../layout/center/Center";

export default {
	title: "Auth/SignUpForm",
	component: SignUpForm,
	decorators: [
		(story) => (
			<Provider store={store}>
				<Center>
					<ScreenController>{story()}</ScreenController>
				</Center>
			</Provider>
		),
	],
} as Meta;

export const Primary: StoryObj = () => <SignUpForm />;
Primary.args = {};
Primary.storyName = "Sign Up";
