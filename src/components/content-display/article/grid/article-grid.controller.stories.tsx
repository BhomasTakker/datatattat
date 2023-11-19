import type { Meta, StoryObj } from "@storybook/react";

import { Articles } from "../mock/Articles.mock";
import { ArticleGridController } from "./article-grid.controller";

const meta: Meta<typeof ArticleGridController> = {
	component: ArticleGridController,
};
export default meta;
type Story = StoryObj<typeof ArticleGridController>;

export const ArticleListComponent: Story = {
	args: {
		data: Articles,
		variant: "display1",
	},
};
