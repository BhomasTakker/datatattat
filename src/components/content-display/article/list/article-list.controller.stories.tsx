import type { Meta, StoryObj } from "@storybook/react";

import { Articles } from "../mock/Articles.mock";
import { ArticleListController } from "./article-list.controller";

const meta: Meta<typeof ArticleListController> = {
	component: ArticleListController,
};
export default meta;
type Story = StoryObj<typeof ArticleListController>;

export const Controller: Story = {
	args: {
		data: Articles,
		variant: "expanded-standard",
		limit: undefined,
	},
};
