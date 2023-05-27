//MUI types :?
//https://stackoverflow.com/questions/69573929/how-to-type-mui-typography-props-v5
//https://github.com/mui/material-ui/blob/e0cdcd130db60d252c4382570844ea7278649a08/packages/mui-material/src/Typography/Typography.d.ts
//
// An actual typ map for the prop types - assume all types?
// TypographyTypeMap
// props
// variant
//
import { TypographyTypeMap } from "@mui/material";
import { ReactNode } from "react";

export enum TitleVariant {
	PAGE = "Page",
	SUB = "Sub",
	EDIT_COMPONENT = "EditComponent",
}

export type EditTitleProps = {
	// variant?: TypographyTypeMap["props"]["variant"];
	variant?: TitleVariant;
	text: string; //string of acceptable characters
};

//perhaps a better file to be in
export type InfoProps = {
	children: ReactNode;
};
