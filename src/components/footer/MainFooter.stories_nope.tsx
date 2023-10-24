import { Meta, StoryObj } from "@storybook/react";
import { MainFooter } from "./MainFooter";

export default {
	title: "Layout/MainFooter",
	component: MainFooter,
	decorators: [(story) => story()],
} as Meta;

export const Primary: StoryObj = () => <MainFooter />;
Primary.args = {};
Primary.storyName = "Footer";
