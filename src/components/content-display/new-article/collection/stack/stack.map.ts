import { getColumnsRenderObject } from "./source-objects/columns";

export const stackMap = new Map([
	// We can add in a stack-carousel
	["stack-columns", getColumnsRenderObject],
]);

export const getStackRenderObject = (id: string) => {
	return stackMap.get(id);
};
