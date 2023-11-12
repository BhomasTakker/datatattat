import type { Meta, StoryObj } from "@storybook/react";
import { ArticleImage } from "./article-image";
import { imageData1, imageData2 } from "./article-image.mock";

const meta: Meta<typeof ArticleImage> = {
	component: ArticleImage,
};
export default meta;
type Story = StoryObj<typeof ArticleImage>;

export const Primary: Story = {
	name: "I am the primary",
	args: {
		...imageData1,
	},
};

// Shouldn't here though right?
// export const UseMEta: Story = {
// 	name: "I used meta data",
// 	args: {
// 		...imageData2,
// 	},
// };
