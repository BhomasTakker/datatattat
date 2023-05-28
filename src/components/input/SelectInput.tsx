import { Stack, TextField } from "@mui/material";
import React, { ReactNode } from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { MARGINS } from "config/styles/styles.config";
import classes from "./SelectInput.module.scss";

//Type this somewhere
// TypographyTypeMap["props"]["variant"];
type InputVariant = "standard" | "outlined" | "filled" | undefined;

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
	id: string | undefined;
	// onChange: (e: unknown) => void;
};

//Way better
export const SelectInput = ({
	label, //Auth.email,
	id,
	name,
	field = {},
	error = false,
	helperText = "",
	required = false,
	fullWidth = false,
	variant = "filled",
	disabled = false,
	children = [],
}: // onChange = (e: unknown) => {},
SelectInputType) => {
	return (
		<Stack
			width="100%"
			direction="row"
			alignItems="center"
			gap={`${MARGINS.MIDSMALL}`}
		>
			<label className={classes.label} htmlFor="Select Container">
				{label}
			</label>
			<TextField
				// color="primary"
				id={id}
				hiddenLabel
				select
				fullWidth={fullWidth}
				{...field}
				name={name}
				// label={label}
				required={required}
				variant={variant}
				error={error}
				helperText={helperText}
				disabled={disabled}
				// onChange={onChange}
				defaultValue="Small"
				size="small"
				className={classes.textfield}
			>
				{children}
			</TextField>
		</Stack>
	);
};

export const SelectInputWithControl = withControl(SelectInput);
