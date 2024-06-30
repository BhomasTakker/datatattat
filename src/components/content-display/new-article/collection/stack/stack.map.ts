import { getColumnsRenderObject } from "./source-objects/columns";
import { getScrollerRenderObject } from "./source-objects/scroller";

type StackMapOptions = "stack-columns" | "stack-scroller";

type StackMapFunctionProps =
	| typeof getColumnsRenderObject
	| typeof getScrollerRenderObject;

export const stackMap = new Map<StackMapOptions, StackMapFunctionProps>([
	// We can add in a stack-carousel
	["stack-columns", getColumnsRenderObject],
	["stack-scroller", getScrollerRenderObject],
]);
