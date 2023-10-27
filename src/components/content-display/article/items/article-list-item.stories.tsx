// https://storybook.js.org/docs/react/writing-stories/introduction
import type { Meta, StoryObj } from "@storybook/react";

import { ArticleListItem } from "./article-list-item";
import { Article1, Article2, Article3 } from "../lists/article-list.mock.data";

const meta: Meta<typeof ArticleListItem> = {
	component: ArticleListItem,
};
export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
	name: "I am the primary",
	args: {
		item: Article1,
		useAvatar: true,
		showDescription: true,
		showPublished: true,
		showAuthor: true,
		showPublisher: true,
	},
};
