import type { Meta, StoryObj } from "@storybook/react";
import { Article } from "./Article";

const meta: Meta<typeof Article> = {
	component: Article,
};
export default meta;
type Story = StoryObj<typeof Article>;

export const Display: Story = {
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

export const Card: Story = {
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
		type: "card",
		showDescription: true,
		showImage: true,
		direction: "r2l",
		as: "div",
	},
};

export const ListItem: Story = {
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
		type: "listItem",
		style: "one-one-line",
		showDescription: true,
		showImage: true,
		as: "div",
	},
};
