import { Box } from "@mui/material";
import { SelectInput, SelectInputProps } from "../select/select-input";
import { useContext, useEffect, useState } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { inputMap } from "../input.map";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { getParentId } from "@/src/utils/edit";

type OptionsMapProps = {
	optionsMap: Map<string, UnknownObject[]>;
	optionId: string;
};

type ObjectSelectInput = SelectInputProps & OptionsMapProps;

const createNewId = (id: string, optionId: string) => {
	const parentId = getParentId(id);
	// if given option id - create object
	// else add to main object/parent
	return optionId ? `${parentId}.${optionId}` : parentId;
};

const renderChildren = (
	inputs: UnknownObject[] | undefined,
	id: string,
	optionId: string
) => {
	if (!inputs) {
		return []; // null;
	}
	const newId = createNewId(id, optionId);

	return inputs.map((input) => {
		const { id: inputId, info, label, type, ...rest } = input;
		const Component = inputMap.get(type as string) || null;

		if (!Component) {
			return null;
		}

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
}: ObjectSelectInput) => {
	const [components, setComponents] = useState<(JSX.Element | null)[]>([]);
	const { setValue } = useFormContext();
	const { getValue: getPageData } = useContext(PageStateContext);
	const value: string = useWatch({
		name: id,
	});

	useEffect(() => {
		if (value) {
			setValue(id, value);
			setComponents(renderChildren(optionsMap.get(value), id, optionId));
		}
	}, [id, optionId, optionsMap, setValue, value]);

	////////////////////////
	// Hack / Force update
	// If no data exists / try to get the data
	// This is one of our issues
	// Needs further testing
	// As a rough fix - fine - as a guide for more - fine
	// Ultimately - we need to redo edit and probably follow this type of approach
	// Or, at least, can we create a hook
	//////////////////////////////
	useEffect(() => {
		const val = getPageData(id);
		if (!val) return;

		setValue(id, val);

		if (!value) {
			const newId = createNewId(id, optionId);
			const optionData = getPageData(newId);

			if (!optionData) return;

			setValue(newId, optionData);

			return;
		}
	}, [getPageData, id, optionId, setValue, value]);

	return (
		<Box>
			<SelectInput info={info} id={id} label={label} options={options} />
			{components}
		</Box>
	);
};
