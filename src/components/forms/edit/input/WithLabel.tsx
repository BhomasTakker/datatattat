import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import React, { ReactNode } from "react";
import classes from "./WithLabel.module.scss";

type Props = {
	children: ReactNode;
	label: string;
	htmlFor: string;
};

export const WithLabel = ({ children, label, htmlFor }: Props) => {
	return (
		<Stack
			width="100%"
			direction="row"
			alignItems="center"
			gap={`${MARGINS.MIDSMALL}`}
		>
			{label ? (
				<label className={classes.label} htmlFor={htmlFor}>
					{label}
				</label>
			) : (
				<></>
			)}
			{children}
		</Stack>
	);
};
