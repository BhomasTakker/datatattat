import { COMPONENTS, EDIT_COMPONENTS } from "./components";

//We just need type at the moment
export const componentFactory = (componentType: string) => {
	//Need checks and or return default
	//Fix the squiggly
	const componentElement = COMPONENTS[componentType];

	// console.log({ componentElement });
	// console.log({ componentType });

	return componentElement;
};

export const componentEditFactory = (id: string) => {
	const componentEditElement = EDIT_COMPONENTS[id];

	// console.log({ componentEditElement });

	return componentEditElement;
};
