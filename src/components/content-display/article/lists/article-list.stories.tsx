import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./article-list";
import { Articles } from "./article-list.mock.data";

const meta: Meta<typeof ArticleList> = {
	component: ArticleList,
};
export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Standard: Story = {
	args: {
		data: Articles,
		title: "Article List Title",
		description: "Article List Title - Lorem Ipsum",
		useAvatar: true,
		showDescription: true,
		showPublished: true,
		showAuthor: true,
		showPublisher: true,
	},
};
