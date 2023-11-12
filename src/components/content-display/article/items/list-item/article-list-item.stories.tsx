// https://storybook.js.org/docs/react/writing-stories/introduction
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleListItem } from "./aticle-list-item";
import { Article1 } from "../../mock/Articles.mock";

const meta: Meta<typeof ArticleListItem> = {
	component: ArticleListItem,
};
export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
	name: "Article List Item",
	args: {
		item: Article1,
		direction: "column",
		titleMaxLines: 1,
		useAvatar: true,
		showDescription: true,
		descriptionMaxLines: 3,
		showPublished: true,
		showAuthor: true,
		showPublisher: true,
	},
};
