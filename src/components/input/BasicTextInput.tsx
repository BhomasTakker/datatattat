import { TextField } from "@mui/material";
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
	id: string | undefined;
};

//Potentially should be textfield type select
export const BasicTextInput = ({
	label, //Auth.email,
	id = label,
	fullWidth = true,
	variant = "filled",
	disabled = false,
	value = "",
	onChange = () => {},
}: SelectInputType) => {
	return (
		<WithLabel label={label} htmlFor={id}>
			<TextField
				hiddenLabel
				required
				type="text"
				id={id}
				value={value}
				onChange={onChange}
				disabled={disabled}
				variant={variant}
				fullWidth={fullWidth}
				size="small"
				className={classes.textfield}
			/>
		</WithLabel>
	);
};
