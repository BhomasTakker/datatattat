import { MenuItem, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { withToggleCheck } from "@/src/hoc/actions/withToggleCheck";
import { withInputBlocker } from "@/src/hoc/components/forms/withInputBlocker";

type InputVariant = "standard" | "outlined" | undefined;

//TextInputProps
type TextInputType = {
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
	startAdornment?: ReactElement | undefined;
	endAdornment?: ReactElement | undefined;
};

//This could effectively replace the password, username, and email inputs we have
//Way better
export const TextInput = ({
	label, //Auth.email,
	name,
	field = {},
	error = false,
	helperText = "",
	required = false,
	fullWidth = false,
	variant = "standard",
	disabled = false,
	startAdornment = undefined,
	endAdornment = undefined,
}: TextInputType) => {
	return (
		<TextField
			fullWidth={fullWidth}
			{...field}
			name={name}
			label={label}
			type="text"
			required={required}
			variant={variant}
			error={error}
			helperText={helperText}
			disabled={disabled}
			InputProps={{
				startAdornment,
				endAdornment,
			}}
			//TextField seems like it cannot properly be used on it's own
			//investigate this
			// defaultValue={defaultValue} / this breaks withControl
		></TextField>
	);
};

//We can type it here with a generic no? / <TextInputType>
export const TextInputWithControl = withControl(TextInput);
export const TextInputWithBlocker = withInputBlocker(TextInput);
export const TextInputWithControlAndInputBlocker =
	withInputBlocker(TextInputWithControl);

export const TextInputWithControlAndToggle =
	withToggleCheck(TextInputWithControl);

export const createSelectInputList = (hash: {}) => {
	return Object.keys(hash).map((key) => (
		<MenuItem key={key} value={key}>
			{key}
		</MenuItem>
	));
};
