import {
	PaperTypeMap,
	StackTypeMap,
	TableContainerTypeMap,
	TableTypeMap,
	TypographyTypeMap,
} from "@mui/material";
import { HTMLAttributes } from "react";

export type TypographyProps = Omit<
	TypographyTypeMap["props"],
	"children" | "classes"
> &
	HTMLAttributes<HTMLTableElement>;

// this way of typing means things like ref etc don't also need omitting
// Can't we make a generic of this? Omit<T["props"], "children" | "classes">;
export type StackProps = Omit<StackTypeMap["props"], "children" | "classes"> &
	HTMLAttributes<HTMLTableElement>;
export type PaperProps = Omit<PaperTypeMap["props"], "children" | "classes"> &
	HTMLAttributes<HTMLTableElement>;

export type TableContainerProps = Omit<
	TableContainerTypeMap["props"],
	"children" | "classes"
> &
	HTMLAttributes<HTMLTableElement>;

export type TableProps = Omit<TableTypeMap["props"], "children" | "classes"> &
	HTMLAttributes<HTMLTableElement>;
