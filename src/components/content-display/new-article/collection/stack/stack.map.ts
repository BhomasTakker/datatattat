import { getDisplayHeaderRenderObject } from "./source-objects/display-header";
import { getColumnsRenderObject } from "./source-objects/duel-columns";

export const stackMap = new Map([
	// delete me / columns does it better
	["stack-displayHeader", getDisplayHeaderRenderObject],

	// We can add in a stack-carousel
	["stack-columns", getColumnsRenderObject],
]);

export const getStackRenderObject = (id: string) => {
	return stackMap.get(id);
};
