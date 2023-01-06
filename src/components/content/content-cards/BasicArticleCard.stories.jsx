import BasicArticleCard from "./BasicArticleCard";
import { Center } from "../../center/Center";

export default {
	title: "Components/content/card/BasicArticleCard",
	component: BasicArticleCard,
	decorators: [(story) => <Center>{story()}</Center>],
	tags: ["autodocs"],
	argTypes: {
		width: { control: "number" },
		height: { control: "number" },
		// onClick: { action: "clicked" }, //not logged?
	},
};

// const Template = (args) => <BasicArticleCard {...args} />;

// export const Default = Template.bind({});
// Default.args = {
// 	width: 300,
// 	height: 300,
// };

export const Default = {
	args: {
		width: 300,
		height: 300,
	},
};

//<BasicArticleCard height={300} width={300} />;
