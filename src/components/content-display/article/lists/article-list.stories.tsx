import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./article-list";
import { Articles } from "../mock/Articles.mock";

const meta: Meta<typeof ArticleList> = {
	component: ArticleList,
};
export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Standard: Story = {
	args: {
		data: Articles,
		componentTitle: "Article List Title",
		componentTitleVariant: "Primary",
		componentDescription: "Article List Title - Lorem Ipsum",
		componentDescriptionVariant: "Primary",

		itemTitleMaxLines: 1,
		itemTitleVariant: "Primary",
		itemDescriptionMaxLines: 3,
		itemDescriptionVariant: "Secondary",

		itemDetailsVariant: "space-between",

		useAvatar: true,
		showDescription: true,
		showPublished: true,
		showAuthor: true,
		showPublisher: true,
	},
};
