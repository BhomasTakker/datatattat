import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box, Stack } from "@mui/material";
import { SimpleArticle } from "../items/simple-item";
import { Collection } from "@/src/types/data-structures/collection/collection";
import { useMemo } from "react";
import { StackItemsMap } from "../items/stack/stack-items.map";

// Almost identical to SimpleList
// Change itemsMap and return component
// Neither should be displaying page info

interface SimpleStackProps {
	data: Collection; // should be data
	title: string;
	description: string;
	component: string; // union / enum really
}

const createComponentsList = (component: any, items: any[]) => {
	const Component = StackItemsMap.get(component) || SimpleArticle;
	const componentList = items.map((item) => (
		// use guid for key?
		<Component key={item.title} {...item} />
	));

	return componentList;
};

// Page should have title and description, meta, etc
// We have component info
// i.e. stack diretcion
export const SimpleStack = ({
	data,
	title,
	description,
	component,
}: SimpleStackProps) => {
	const { items } = data;

	const componentList = useMemo(
		() => createComponentsList(component, items),
		[component, items]
	);

	return (
		<Box>
			{/* Need to make a typography component? */}
			{/* i.e.set numbe of variants */}
			{/* Show or not etc - this is or should be in page !! */}
			<Title text={title} variant={TitleVariant.CONTENT} />
			<Stack>{componentList}</Stack>
		</Box>
	);
};
