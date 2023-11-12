import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardMock } from "./article-card.mock";
import { ArticleCardWrapper } from "./article-card.wrapper";
import { Article1 } from "../mock/Articles.mock";

const meta: Meta<typeof ArticleCardWrapper> = {
	component: ArticleCardWrapper,
};
export default meta;
type Story = StoryObj<typeof ArticleCardWrapper>;

export const Wrapper: Story = {
	args: {
		item: Article1,
		direction: "column",
	},
};
