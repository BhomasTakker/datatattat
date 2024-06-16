import type { Meta, StoryObj } from "@storybook/react";
import { Display } from "./Display";

const meta: Meta<typeof Display> = {
	component: Display,
};
export default meta;
type Story = StoryObj<typeof Display>;

export const DisplayWrapper: Story = {
	args: {
		meta: {
			title: "Tick attack: BBC hunts for tiny bloodsuckers as diseases rise. ",
			description:
				"A closer look at the tiny, disease-carrying pests that are becoming more common in the UK.",
			image:
				"https://ichef.bbci.co.uk/news/1024/branded_news/22c1/live/26841cd0-23e5-11ef-80aa-699d54c46324.jpg",
			imageAlt:
				"James Gallagher looking at vial of ticks collected from field search",
		},
		size: "xl",
		type: "display",
		align: "align-top",
		justify: "justify-start",
		showDescription: true,
		showImage: true,
		as: "div",
	},
};
