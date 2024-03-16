import { FormControlLabel, Switch } from "@mui/material";
import { WithLabel } from "../forms/edit/input/WithLabel";
import {
	Controller,
	ControllerRenderProps,
	FieldValues,
	useForm,
	useFormContext,
} from "react-hook-form";
import { withControl } from "@/src/hoc/components/forms/withControl";
import { useEffect } from "react";

type SwitchInputType = {
	label: string;
	id: string | undefined;
	name: string;
	checked?: boolean;
	field?: ControllerRenderProps<FieldValues, string> | {};
	fieldState: any;
	error?: boolean;
	required?: boolean;
	disabled?: boolean;
};

export const SwitchInput = ({
	label, //Auth.email,
	id = label,
	name,
	field = {},
	error = false,
	required = false,
	checked = false,
	disabled = false,
}: SwitchInputType) => {
	return (
		<WithLabel label={label} htmlFor={id}>
			<Switch
				edge="end"
				// use default if controlled
				// defaultChecked={checked}
				{...field}
				name={name}
				required={required}
				disabled={disabled}
				// inputProps={{
				//   'aria-labelledby': 'switch-list-label-wifi',
				// }}
			/>
		</WithLabel>
	);
};

// Do we need any more?
// Area that is messy perhaps
export const SwitchInputWithControl = withControl(SwitchInput);

type ControlledSwitchInput = {
	label: string;
	id: string;
	name: string;
	checked?: boolean;
	required?: boolean;
	disabled?: boolean;
};

// It looks like we need a separate rendition of withControl
// withChangeControl or something / dunno how specific
// Seems more bespoke from here on
export const ControlledSwitchInput = ({
	label,
	id,
	name = id,
	required = false,
	checked = false,
	disabled = false,
}: ControlledSwitchInput) => {
	const { control, setValue, getValues } = useFormContext();

	// I think in this approach
	// We have to set the value - at least initially
	// Currently almost certainly multiple renders (Think 1 extra?)
	// but works
	// useEffect(() => {
	// 	const value = getValues(name);
	// 	console.log("0909", { name, value });
	// 	setValue(name, value || checked);
	// }, [checked, getValues, name, setValue]);

	return (
		<Controller
			name={name}
			control={control}
			// defaultValue={defaultValue}
			render={({ field: { onChange, value } }) => (
				//<WithLabel label={label} htmlFor={id}>
				<FormControlLabel
					control={
						<Switch
							checked={value}
							onChange={onChange}
							name={name}
							required={required}
							disabled={disabled}
						/>
					}
					label={label}
				/>
			)}
		/>
	);
};
