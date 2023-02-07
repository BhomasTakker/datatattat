import { COMPONENTS } from "./components";

//We just need type at the moment
export const componentFactory = (componentData: any) => {
	const { componentType } = componentData;

	console.log({ componentData });
	console.log({ componentType });
	//Need checks and or return default
	//Fix the squiggly
	const componentElement = COMPONENTS[componentType];

	console.log({ componentElement });

	return componentElement;
};
