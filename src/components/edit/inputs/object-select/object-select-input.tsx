import { Box } from "@mui/material";
import { SelectInput, SelectInputProps } from "../select/select-input";
import { PropsWithChildren, useEffect, useState } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { inputMap } from "../input.map";

type OptionsMapProps = {
	optionsMap: Map<string, UnknownObject[]>;
	optionId: string;
};

type ObjectSelectInput = PropsWithChildren<SelectInputProps & OptionsMapProps>;

const renderChildren = (
	inputs: UnknownObject[] | undefined,
	id: string,
	optionId: string
) => {
	if (!inputs) {
		return null;
	}
	const idAsArray = id.split(".");
	const newIdAsArray = idAsArray.splice(0, idAsArray.length - 1);
	// if given option id - create object
	// else add to main object/parent
	const newId = optionId
		? `${newIdAsArray.join(".")}.${optionId}`
		: `${newIdAsArray.join(".")}`;

	return inputs.map((input) => {
		const { id: inputId, info, label, type, ...rest } = input;
		const Component = inputMap.get(type as string) || <></>;

		return (
			<Component
				key={inputId}
				info={info}
				label={label}
				id={`${newId}.${inputId}`}
				name={`${newId}.${inputId}`}
				{...rest}
			/>
		);
	});
};

export const ObjectSelectInput = ({
	info,
	label,
	id,
	options,
	optionId,
	defaultValue = undefined,
	optionsMap,
	children,
}: ObjectSelectInput) => {
	const [components, setComponents] = useState<JSX.Element[] | null>(null);
	const { setValue } = useFormContext();
	const value: string = useWatch({
		name: id,
	});

	useEffect(() => {
		if (value) {
			setValue(id, value);
			setComponents(renderChildren(optionsMap.get(value), id, optionId));
		}
	}, [id, optionId, optionsMap, setValue, value]);

	return (
		<Box>
			<SelectInput info={info} id={id} label={label} options={options} />
			{components}
		</Box>
	);
};
