import { componentFactory } from "@/src/factories/component-factory";
import Stack from "@mui/material/Stack";
import React from "react";

//data is of type
type DTAStackProps = {
	data: any;
};

const createComponentsList = (components: any[]) => {
	return components.map((component, index) => {
		const Component = componentFactory(component);
		return <Component key={index} />;
	});
};

export const DTAStack = ({ data }: DTAStackProps) => {
	//Take in content data
	console.log({ data });
	const { components } = data;

	const componentsList = createComponentsList(components);

	return <Stack>{componentsList}</Stack>;
};
