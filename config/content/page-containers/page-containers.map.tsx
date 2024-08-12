import { Grid } from "@/src/components/content-display/page-containers/grid/Grid";
import { PageDisplayStack } from "@/src/components/content-display/page-containers/stack/Stack";

export enum PageLayoutComponents {
	STACK = "Stack",
	GRID = "Grid",
}

type PageComponents = typeof PageDisplayStack | typeof Grid;

export const PAGE_CONTAINERS_MAP = new Map<
	PageLayoutComponents,
	PageComponents
>([
	[PageLayoutComponents.STACK, PageDisplayStack],
	[PageLayoutComponents.GRID, Grid],
]);
