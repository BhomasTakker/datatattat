import { GRID } from "@/src/components/content-display/page-containers/grid/Grid.edit.config";
import { STACK } from "./stack/page-stack.edit.config";

export const PAGE_COMPONENTS = {
	Stack: STACK,
	Grid: GRID,
} as const;
