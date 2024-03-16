// We need to merge all of these
// We shouldn't have a select here and one for edit, etc
export type SelectComponentOption = {
	value: string;
	label: string;
};

type SelectComponent = {
	id: string;
	options: SelectComponentOption[];
	label: string;
	selected: string;
	onSelect: (event: SelectChangeEvent<string>) => void;
};

import {
	Box,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";

export const SelectComponent = ({
	id,
	options,
	label, // = id
	selected,
	onSelect,
}: SelectComponent) => {
	return (
		<Box width={"400px"}>
			<InputLabel id={`${id}-label`}>{label}</InputLabel>
			<Select
				labelId={`${id}-label`}
				id={id}
				size="small"
				variant="standard"
				value={selected}
				label={label}
				onChange={(event) => onSelect(event)}
				sx={{ width: "100%" }}
				// Solves appearing blank scrollbar
				// Probably causes something or other (scroll with open)
				// May disable scroll of the actual Menu?
				MenuProps={{
					disableScrollLock: true,
				}}
			>
				{options.map(({ label, value }) => (
					<MenuItem key={label} value={value}>
						<Typography sx={{ textTransform: "capitalize" }}>
							{label}
						</Typography>
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};
