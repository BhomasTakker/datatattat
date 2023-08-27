import { COMPONENTS } from "./components";

//We just need type at the moment
export const componentFactory = (componentType: string) => {
	//Need checks and or return default
	//Fix the squiggly
	const componentElement = COMPONENTS[componentType];

	// console.log({ componentElement });
	// console.log({ componentType });

	console.log("FEAT:201", "EDIT:COMPONENTS", "REFACTOR", "COMPONENT:FACTORY");

	////////////////////////////////////////////////
	// Get component config from type and id
	// We have that component already
	// Create Component
	//////////////////////////////////////////////////

	return componentElement;
};

// export const componentEditFactory = (id: string) => {
// 	const componentEditElement = EDIT_COMPONENTS[id];

// 	// console.log({ componentEditElement });

// 	return componentEditElement;
// };
