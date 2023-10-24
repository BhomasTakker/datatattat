//https://storybook.js.org/docs/7.0/react/writing-stories/introduction
//https://storybook.js.org/blog/writing-stories-in-typescript/
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Meta, StoryObj } from "@storybook/react";
import { ScreenController } from "../../layout/screen/ScreenController";

import { Center } from "../../layout/center/Center";
import { MainHeader } from "./MainHeader";

export default {
	title: "Components/MainHeader",
	component: MainHeader,
	decorators: [
		(story) => (
			<Provider store={store}>
				<ScreenController>{story()}</ScreenController>
			</Provider>
		),
	],
} as Meta;

//https://storybook.js.org/addons/@tomfreudenberg/next-auth-mock
export const LoggedIn: StoryObj = () => <MainHeader />;
LoggedIn.args = {
	//no idea how to set status by default!
	title: "user authenticated",
	session: {
		data: {
			id: 999,
			login: "user",
			role: "user",
			roles: ["user"],
			username: "User",
			email: "user@local",
		},
		status: "authenticated",
	},
};
export const LoggedOut: StoryObj = () => <MainHeader />;
LoggedOut.args = {
	title: "user not authenticated",
	session: {
		data: {
			id: 999,
			login: "user",
			role: "user",
			roles: ["user"],
			username: "User",
			email: "user@local",
		},
		status: "unauthenticated",
	},
};
