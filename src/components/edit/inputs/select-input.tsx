import { MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { TextInputWithControl } from "../../input/TextInput";
import { WithInfo } from "../info/WithInfo";
import { ReactNode } from "react";

interface SelectInputProps {
	info: string;
	label: string;
	id: string;
	options: any;
}

// Probably elsewhere in time
// should convert to a component?
export const selectInputList = (options: {}) => {
	if (!options) {
		console.log("We error here but why?");
		return <></>;
	}
	// if array
	// if map
	// if object
	// else error
	return Object.keys(options).map((key) => (
		<MenuItem key={key} value={key}>
			{key}
		</MenuItem>
	));
};

// this one probs
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

export const SelectInput = ({ info, label, id, options }: SelectInputProps) => {
	return (
		<WithInfo infoId={info}>
			<SelectInputWithControl label={label} name={id} fullWidth={true} required>
				{selectInputList(options)}
			</SelectInputWithControl>
		</WithInfo>
	);
};
