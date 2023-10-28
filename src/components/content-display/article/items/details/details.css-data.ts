import { StackProps, StackTypeMap } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";

export const spaceBetween: StackProps = {
	direction: "row",
	justifyContent: "space-between",
	marginTop: MARGINS.SMALL,
};

export const stack: StackProps = {
	direction: "column",
	marginTop: MARGINS.SMALL,
};

export const DetailsVariant = new Map([
	["space-between", spaceBetween],
	["stack", stack],
]);
