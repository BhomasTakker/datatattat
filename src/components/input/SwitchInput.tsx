import { Switch } from "@mui/material";
import { WithLabel } from "../forms/edit/input/WithLabel";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { withControl } from "@/src/hoc/components/forms/withControl";

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
				defaultChecked={checked}
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
