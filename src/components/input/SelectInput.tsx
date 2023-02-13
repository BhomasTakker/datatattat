import { InputAdornment, TextField } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { Auth } from "@/src/lib/i18n/translation";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

//Type this somewhere
type InputVariant = "standard" | "outlined" | undefined;

//TextInputProps
type SelectInputType = {
	label: string;
	name: string;
	field?: ControllerRenderProps<FieldValues, string> | {};
	error?: boolean;
	helperText?: string;
	// type: string; // enum // also if we are setting as text?
	required?: boolean;
	fullWidth?: boolean;
	variant?: InputVariant;
	disabled?: boolean;
	children: ReactNode;
};

//Way better
export const SelectInput = ({
	label, //Auth.email,
	name,
	field = {},
	error = false,
	helperText = "",
	required = false,
	fullWidth = false,
	variant = "standard",
	disabled = false,
	children = [],
}: SelectInputType) => {
	return (
		<TextField
			select
			fullWidth={fullWidth}
			{...field}
			name={name}
			label={label}
			required={required}
			variant={variant}
			error={error}
			helperText={helperText}
			disabled={disabled}
		>
			{children}
		</TextField>
	);
};

export const SelectInputWithControl = withControl(SelectInput);
