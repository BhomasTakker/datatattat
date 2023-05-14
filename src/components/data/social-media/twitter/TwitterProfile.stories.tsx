import { Meta, StoryObj } from "@storybook/react";
import { TwitterProfile } from "./profile";

export default {
	title: "Twitter/TwitterProfile",
	component: TwitterProfile,
	decorators: [(story) => story()],
} as Meta;

export const Primary: StoryObj = () => <TwitterProfile />;
Primary.args = {};
Primary.storyName = "TwitterProfile";
