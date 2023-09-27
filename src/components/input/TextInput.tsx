import { InputProps, MenuItem, TextField } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
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

// I think you have triefd to be too generic here.
// we probably want more targetted And simpler components
// We want / need to rethink with controls too i.e. withControl, withBlocker, etc
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
		return (
			<WithLabel label={label} htmlFor={id}>
				<TextField
					// Need pass width in
					sx={{ width: "100%" }}
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

// For Christs sake move this
export const createSelectInputList = (hash: {}) => {
	if (!hash) {
		console.log("We error here but why?");
		return <p>Error</p>;
	}
	return Object.keys(hash).map((key) => (
		<MenuItem key={key} value={key}>
			{key}
		</MenuItem>
	));
};

// I can't believe you made this and didn't move these...
// this is how the above should be
export const createSelectInputListMap = (hash: Map<string, any>) => {
	if (!hash) {
		console.log("We error here but why?");
		return <p>Error</p>;
	}
	const options: ReactNode[] = [];

	hash.forEach((_val, key, _map) => {
		options.push(
			<MenuItem key={key} value={key}>
				{key}
			</MenuItem>
		);
	});

	return options;
};
