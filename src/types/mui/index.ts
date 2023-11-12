import { StackTypeMap, TypographyTypeMap } from "@mui/material";

export type TypographyProps = Omit<
	TypographyTypeMap["props"],
	"children" | "classes"
>;

// lol - import { StackProps } from "@mui/material";
export type StackProps = Omit<StackTypeMap["props"], "children" | "classes">;
export type StackDirection =
	| "row"
	| "row-reverse"
	| "column"
	| "column-reverse";
