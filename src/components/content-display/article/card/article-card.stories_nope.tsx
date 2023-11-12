import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "./article-card";
import { ArticleCardMock } from "./article-card.mock";

const { props } = ArticleCardMock;

const meta: Meta<typeof ArticleCard> = {
	component: ArticleCard,
};
export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Primary: Story = {
	name: "I am the primary",
	args: {
		...props,
	},
};
