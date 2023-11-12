import type { Meta, StoryObj } from "@storybook/react";
import { ArticleStack } from "./article-stack";
import { ArticleStackMock } from "./article-stack.mock";

const meta: Meta<typeof ArticleStack> = {
	component: ArticleStack,
};

export default meta;
type Story = StoryObj<typeof ArticleStack>;

const { props } = ArticleStackMock;

export const Standard: Story = {
	args: {
		...props,
	},
};
