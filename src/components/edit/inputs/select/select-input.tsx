import { MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../../input/SelectInput";
import { WithInfo } from "../../info/WithInfo";
import { PropsWithChildren, ReactNode } from "react";

interface SelectInputProps {
	info: string;
	label: string;
	id: string;
	options: any;
	defaultValue?: string;
}

// Probably elsewhere in time
// should convert to a component?
export const createSelectInputListArray = (options: string[]) => {
	if (!options) {
		return <></>;
	}

	return options.map((option) => {
		return (
			<MenuItem key={option} value={option}>
				{option}
			</MenuItem>
		);
	});
};

// seperate thes efunctions into their own files no
export const createSelectInputListMap = (hash: Map<string, any>) => {
	if (!hash) {
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

export const createSelectInputListObject = (options: {}) => {
	if (!options) {
		return <></>;
	}

	return Object.keys(options).map((key) => {
		return (
			<MenuItem key={key} value={key}>
				{key}
			</MenuItem>
		);
	});
};

const getSelectInputList = (options: unknown) => {
	switch (true) {
		case options instanceof Map:
			return createSelectInputListMap;

		case Array.isArray(options):
			return createSelectInputListArray;

		case typeof options === "object" && options !== null:
			return createSelectInputListObject;

		default:
			return () => "Error";
	}
};

export const SelectInput = ({
	info,
	label,
	id,
	options,
	defaultValue = undefined,
	children,
}: PropsWithChildren<SelectInputProps>) => {
	const createInputList = getSelectInputList(options);

	return (
		<WithInfo infoId={info}>
			<SelectInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				defaultValue={defaultValue}
				required
			>
				{createInputList(options)}
			</SelectInputWithControl>
			{children}
		</WithInfo>
	);
};
