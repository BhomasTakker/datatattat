// Perhaps not necessarily a Page stack?

import { Stack } from "@mui/material";
import { createComponents } from "../../components/create-components";

type Component = any;

type Direction = "row" | "row-reverse" | "column" | "column-reverse";

////////////////
// Main stack //
// Basic Variations //
// Have icons at the side like a menu & scrollable?

export const PageDisplayStack = ({ data }: { data: any }) => {
	console.log("FEATURE:001", "PAGE:DISPLAY:STACK", { data });
	const { props, container, components } = data;
	const { direction = "column" } = props;
	// I don't think you'd ever do a row stack at this point
	// Stack of row Stacks makes sense
	return <Stack direction={"column"}>{createComponents(components)}</Stack>;
};
