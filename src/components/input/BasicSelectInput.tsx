import { Select, TextField } from "@mui/material";
import React, { ReactNode } from "react";
import { WithLabel } from "../forms/edit/input/WithLabel";
import classes from "./Input.module.scss";

type InputVariant = "standard" | "outlined" | "filled" | undefined;

type SelectInputType = {
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	fullWidth?: boolean;
	variant?: InputVariant;
	disabled?: boolean;
	children: ReactNode;
	id: string | undefined;
	// onChange: (e: unknown) => void;
};

//Potentially should be textfield type select
export const BasicSelectInput = ({
	label, //Auth.email,
	id = label,
	fullWidth = true,
	variant = "filled",
	disabled = false,
	children = [],
	value = "",
	onChange = () => {},
}: SelectInputType) => {
	console.log("SELECT INPUT RE-RENDER");
	return (
		<WithLabel label={label} htmlFor={id}>
			<TextField
				select
				// labelId=""
				hiddenLabel
				id={id}
				value={value}
				// label={label}
				onChange={onChange}
				disabled={disabled}
				variant={variant}
				fullWidth={fullWidth}
				size="small"
				className={classes.textfield}
			>
				{children}
			</TextField>
		</WithLabel>
	);
};
