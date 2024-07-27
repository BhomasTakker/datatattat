import type { Meta, StoryObj } from "@storybook/react";
import { SocialMedia } from "./Social-Media";

// How would we?
const meta: Meta<typeof SocialMedia> = {
	component: SocialMedia,
	decorators: [
		(Story) => (
			<>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
				<script async src="https://platform.twitter.com/widgets.js"></script>
			</>
		),
	],
};
export default meta;
type Story = StoryObj<typeof SocialMedia>;

export const X: Story = {
	args: {},
};
