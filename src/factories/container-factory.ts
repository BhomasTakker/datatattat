import { CONTAINERS } from "./containers";

////////////////////////////////////
// This is our topLevel Component //
////////////////////////////////////

//We just need type at the moment
// need return one of a number of ReactElements
export const containerFactory = (containerData: any) => {
	const { container } = containerData;
	const { containerType } = container;

	const containerElement = CONTAINERS[containerType];

	// console.log({ containerElement });

	return containerElement;
};
