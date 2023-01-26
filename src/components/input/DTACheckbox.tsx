import { Checkbox, FormControlLabel } from "@mui/material";

type DTACheckboxProps = {
	checked: boolean;
	onChange: (event: unknown) => void;
	label: string;
};

export const DTACheckbox = ({ checked, onChange, label }: DTACheckboxProps) => {
	return (
		<FormControlLabel
			label={label}
			control={<Checkbox checked={checked} onChange={onChange} />}
		/>
	);
};
