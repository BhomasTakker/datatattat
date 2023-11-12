import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./article-list";
import { Articles } from "../mock/Articles.mock";

const meta: Meta<typeof ArticleList> = {
	component: ArticleList,
};
export default meta;
type Story = StoryObj<typeof ArticleList>;

export const ArticleListComponent: Story = {
	args: {
		data: Articles,
		variant: "expanded",
	},
};
