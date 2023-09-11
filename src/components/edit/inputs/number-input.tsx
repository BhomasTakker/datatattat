import { withControl } from "@/src/hoc/components/forms/withControl";
import { WithInfo } from "../info/WithInfo";
import { WithLabel } from "../../forms/edit/input/WithLabel";
import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

import classes from "./Input.module.scss";

type InputVariant = "standard" | "outlined" | "filled" | undefined;

interface NumberInputProps {
	min?: number;
	max?: number;
}

interface InputProps {
	label: string;
	id: string | undefined;
	info: string;
	name: string;
	field?: ControllerRenderProps<FieldValues, string> | {};
	fieldState: any;
	error?: boolean;
	helperText?: string;
	required?: boolean;
	fullWidth?: boolean;
	variant?: InputVariant;
	disabled?: boolean;
}

interface TextInputProps {
	info: string;
	label: string;
	id: string;
}

// Clean this up and redo others
export const NumberInput = ({
	info,
	label,
	id = label,
	name, //object key / form id
	field = {},
	fieldState,
	error = false,
	helperText = "",
	required = false,
	fullWidth = false,
	variant = "filled",
	disabled = false,
	// okay so input props
	min = undefined,
	max = undefined,
}: InputProps & NumberInputProps) => {
	console.log(
		"FEATURE:115",
		"EDIT:PROPS",
		"TEXT:INPUT",
		{ info },
		{ id },
		{ label },
		{ min },
		{ max }
	);
	return (
		<WithInfo infoId={info}>
			<WithLabel label={label} htmlFor={id}>
				<TextField
					id={id}
					hiddenLabel
					fullWidth={true}
					{...field}
					name={id}
					// label={label}
					type="number"
					required={required}
					variant={variant}
					error={error}
					helperText={helperText}
					disabled={disabled}
					// defaultValue="Small"
					size="small"
					className={classes.textfield}
					InputProps={{ inputProps: { min: min, max: max } }}
				></TextField>
			</WithLabel>
		</WithInfo>
	);
};

export const NumberInputWithControl = withControl(NumberInput);