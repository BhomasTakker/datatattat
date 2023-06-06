import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MARGINS } from "config/styles/styles.config";
import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	label: string;
	htmlFor: string;
};

const Label = styled("label")(({ theme }) => ({
	display: "inline-block",
	minWidth: "20%",
	overflow: "hidden",
	[theme.breakpoints.down("md")]: {},
	[theme.breakpoints.up("md")]: {},
	[theme.breakpoints.up("lg")]: {
		whiteSpace: "nowrap",
	},
}));

export const WithLabel = ({ children, label, htmlFor }: Props) => {
	return (
		<Stack
			width="100%"
			direction="row"
			alignItems="center"
			gap={`${MARGINS.MIDSMALL}`}
		>
			{label ? <Label htmlFor={htmlFor}>{label}</Label> : <></>}
			{children}
		</Stack>
	);
};
