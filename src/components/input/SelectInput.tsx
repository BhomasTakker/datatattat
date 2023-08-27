// FIX:- https://stackoverflow.com/a/63726635/21968048
import { TextField } from "@mui/material";
import React, { ReactNode } from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
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
export const SelectInput = React.memo(
	({
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
	}: SelectInputType) => {
		// console.log("ISSUE:589", "SELECT:INPUT", "RE-RENDER", { label }, { name });
		console.log("SELECT INPUT RE-RENDER");
		return (
			<WithLabel label={label} htmlFor={id}>
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
					// FIX:- This solves the select jumping glitch
					SelectProps={{ MenuProps: { disableScrollLock: true } }}
				>
					{children}
				</TextField>
			</WithLabel>
		);
	}
	// (prevProps, nextProps) =>
	// 	prevProps.field.value === nextProps.field.value &&
	// 	prevProps.disabled === nextProps.disabled
);
SelectInput.displayName = "SelectInput";
export const SelectInputWithControl = withControl(SelectInput);
