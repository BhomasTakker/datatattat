// https://storybook.js.org/docs/react/writing-stories/introduction
import type { Meta, StoryObj } from "@storybook/react";

import { ArticleListItem } from "./article-list-item";
import { Article1 } from "../mock/Articles.mock";

const meta: Meta<typeof ArticleListItem> = {
	component: ArticleListItem,
};
export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
	name: "I am the primary",
	args: {
		item: Article1,
		titleVariant: "Primary",
		titleMaxLines: 1,
		useAvatar: true,
		showDescription: true,
		descriptionMaxLines: 3,
		descriptionVariant: "Primary",
		showPublished: true,
		showAuthor: true,
		showPublisher: true,
		detailsVariant: "space-between",
	},
};
