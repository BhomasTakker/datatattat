import type { Meta, StoryObj } from "@storybook/react";
import { ArticleAvatar } from "./avatar";

const meta: Meta<typeof ArticleAvatar> = {
	component: ArticleAvatar,
};
export default meta;
type Story = StoryObj<typeof ArticleAvatar>;

export const Standard: Story = {
	args: {
		alt: "My Alt Text",
		img: "https://e3.365dm.com/23/10/70x70/skynews-dwayne-johnson-waxwork_6333809.jpg?20231024132712",
		src: "https://news.sky.com/story/dwayne-johnson-belly-laughs-after-controversial-waxwork-unveiled-12991640",
	},
};
