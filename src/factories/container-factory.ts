import { CONTAINERS } from "./containers";

//We just need type at the moment
export const containerFactory = (containerData: any) => {
	const { container } = containerData;
	const { containerType } = container;

	console.log({ containerData });
	console.log({ containerType });
	//Need checks and or return default
	//Fix the squiggly
	const containerElement = CONTAINERS[containerType];

	console.log({ containerElement });

	return containerElement;
};
