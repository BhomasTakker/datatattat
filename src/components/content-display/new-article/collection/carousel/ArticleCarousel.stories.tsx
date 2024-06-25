import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCarousel } from "./ArticleCarousel";

const meta: Meta<typeof ArticleCarousel> = {
	component: ArticleCarousel,
};
export default meta;
type Story = StoryObj<typeof ArticleCarousel>;

export const Display: Story = {
	args: {
		articles: [],
	},
};
