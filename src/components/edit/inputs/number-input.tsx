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
// yep - make again see switch just neater and more concise
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
					// step="any"
					// defaultValue="Small"
					size="small"
					className={classes.textfield}
					// use step any for decimals? read up and make available
					InputProps={{ inputProps: { min: min, max: max, step: "any" } }}
				></TextField>
			</WithLabel>
		</WithInfo>
	);
};

export const NumberInputWithControl = withControl(NumberInput);
