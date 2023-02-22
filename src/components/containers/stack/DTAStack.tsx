import { componentFactory } from "@/src/factories/component-factory";
import { withFactory } from "@/src/factories/with-factory";
import Stack from "@mui/material/Stack";
import React from "react";

//data is of type
type DTAStackProps = {
	data: any;
};

const createComponentsList = (components: any[]) => {
	return components.map((component, index) => {
		const { componentType, componentProps, _with = {} } = component;
		const Component = componentFactory(componentType);

		//helpers or something
		const componentObject = {
			component: Component,
			props: componentProps,
		};

		// console.log({ componentType });
		// console.log({ componentProps });
		const RenderElement = withFactory(componentObject, _with);

		return <RenderElement key={index} />;
	});
};

export const DTAStack = ({ data }: DTAStackProps) => {
	//Take in content data
	// console.log({ data });
	const { components } = data;

	const componentsList = createComponentsList(components);

	// console.log({ data });
	return <Stack>{componentsList}</Stack>;
};
