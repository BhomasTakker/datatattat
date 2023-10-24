//https://storybook.js.org/docs/7.0/react/writing-stories/introduction
//https://storybook.js.org/blog/writing-stories-in-typescript/
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Meta, StoryObj } from "@storybook/react";
import { ScreenController } from "../../layout/screen/ScreenController";
import { SignInForm } from "./SignInForm";
import { Center } from "../../layout/center/Center";

export default {
	title: "Auth/SignInForm",
	component: SignInForm,
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

export const Primary: StoryObj = () => <SignInForm />;
Primary.args = {};
Primary.storyName = "Sign In";
