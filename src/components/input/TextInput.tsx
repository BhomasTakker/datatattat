import { InputProps, MenuItem, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { withToggleCheck } from "@/src/hoc/actions/withToggleCheck";
import { withInputBlocker } from "@/src/hoc/components/forms/withInputBlocker";
import { WithLabel } from "../forms/edit/input/WithLabel";
import classes from "./Input.module.scss";

type InputVariant = "standard" | "outlined" | "filled" | undefined;

//TextInputProps
type TextInputType = {
	label: string;
	id: string | undefined;
	name: string;
	field?: ControllerRenderProps<FieldValues, string> | {};
	fieldState: any;
	error?: boolean;
	helperText?: string;
	// type: string; // enum // also if we are setting as text?
	required?: boolean;
	fullWidth?: boolean;
	variant?: InputVariant;
	disabled?: boolean;
	startAdornment?: ReactElement | undefined;
	endAdornment?: ReactElement | undefined;
	//Probably sort this out properly
	inputProps?: InputProps;
};

//This could effectively replace the password, username, and email inputs we have
//Way better
export const TextInput = React.memo(
	({
		label, //Auth.email,
		id = label,
		name,
		field = {},
		fieldState,
		error = false,
		helperText = "",
		required = false,
		fullWidth = false,
		variant = "filled",
		disabled = false,
		startAdornment = undefined,
		endAdornment = undefined,
		inputProps = {},
	}: TextInputType) => {
		console.log(`TEXT INPUT RE-RENDER:${name}`);
		console.log(`TEXT INPUT RE-RENDER:${field?.value}`);
		console.log(`TEXT INPUT RE-RENDER:${id}`);
		// const {
		// 	control,
		// 	formState: { errors },
		// } = useFormContext();
		// console.log(Boolean(control));
		return (
			<WithLabel label={label} htmlFor={id}>
				<TextField
					id={id}
					hiddenLabel
					fullWidth={fullWidth}
					{...field}
					name={name}
					// label={label}
					type="text"
					required={required}
					variant={variant}
					error={error}
					helperText={helperText}
					disabled={disabled}
					// defaultValue="Small"
					size="small"
					className={classes.textfield}
					InputProps={{
						startAdornment,
						endAdornment,
						...inputProps,
					}}
					//TextField seems like it cannot properly be used on it's own
					//investigate this
					// defaultValue={defaultValue} / this breaks withControl
				></TextField>
			</WithLabel>
		);
	}
	//Works to stop re-render on form update
	//https://react.dev/reference/react/memo
	//is *** the same as ***
	//return true to ok false to re-render
	//fix me
	// (prevProps, nextProps) =>
	// 	prevProps.field.value === nextProps.field.value &&
	// 	prevProps.disabled === nextProps.disabled
);

TextInput.displayName = "TextInput";

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
