import { Stack, TextField } from "@mui/material";
import React, { ReactNode } from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { MARGINS } from "config/styles/styles.config";
import classes from "./Input.module.scss";
import { WithLabel } from "../forms/edit/input/WithLabel";

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

// Should have label variants?
//hidden label etc
//Way better
export const SelectInput = ({
	label, //Auth.email,
	id = label,
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
		// <Stack
		// 	width="100%"
		// 	direction="row"
		// 	alignItems="center"
		// 	gap={`${MARGINS.MIDSMALL}`}
		// >
		// 	{label ? (
		// 		<label className={classes.label} htmlFor="Select Container">
		// 			{label}
		// 		</label>
		// 	) : (
		// 		<></>
		// 	)}
		<WithLabel label={label} htmlFor="Select Container">
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
				// defaultValue="Small"
				size="small"
				className={classes.textfield}
			>
				{children}
			</TextField>
		</WithLabel>
		// </Stack>
	);
};

export const SelectInputWithControl = withControl(SelectInput);
