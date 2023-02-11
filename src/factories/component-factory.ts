import { withQuery } from "../hoc/query/withQuery";
import { COMPONENTS } from "./components";

//We just need type at the moment
export const componentFactory = (componentType: string) => {
	//Need checks and or return default
	//Fix the squiggly
	const componentElement = COMPONENTS[componentType];

	// console.log({ componentElement });

	return componentElement;
};
