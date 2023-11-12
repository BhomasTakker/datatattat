// https://storybook.js.org/docs/react/writing-stories/introduction
import type { Meta, StoryObj } from "@storybook/react";
import { Article1 } from "../../mock/Articles.mock";
import { ArticleListItemController } from "./article-list-item.controller";

const meta: Meta<typeof ArticleListItemController> = {
	component: ArticleListItemController,
};
export default meta;
type Story = StoryObj<typeof ArticleListItemController>;

export const Controller: Story = {
	name: "Article List Item Controller",
	args: {
		item: Article1,
		variant: "expanded",
	},
};
