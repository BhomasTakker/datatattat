import { Box } from "@mui/material";
import { SelectInput, SelectInputProps } from "../select/select-input";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { inputMap } from "../input.map";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { getParentId } from "@/src/utils/edit";

type OptionsMapProps = {
	optionsMap: Map<string, UnknownObject[]>;
	optionId: string;
};

type ObjectSelectInput = PropsWithChildren<SelectInputProps & OptionsMapProps>;

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

	// InputList?
	// filter rather than map
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
	children,
}: ObjectSelectInput) => {
	const [components, setComponents] = useState<(JSX.Element | null)[]>([]);
	const { setValue } = useFormContext();
	const { getValue: getPageData } = useContext(PageStateContext);
	const value: string = useWatch({
		name: id,
	});

	console.log("1001:EDIT", { value, id });

	////////////////////////
	// Hack / Force update
	// If no data exists / try to get the data
	// Works for optionId using option selects
	// Non optionId - might work without further change
	// Needs further testing
	// As a rough fix - fine - as a guide for more - fine
	// Ultimately - we need to redo edit and probably follow this type of approach
	//////////////////////////////
	useEffect(() => {
		if (!value) {
			// This is really a hack
			const val = getPageData(id);
			if (!val) return;

			setValue(id, val);

			const newId = createNewId(id, optionId);

			if (optionId) {
				const optionData = getPageData(newId);
				if (!optionData) return;

				setValue(newId, optionData);
				return;
			}

			// This may work without further change - we need to test
			// we also need to get and set values for each sub element / optionId
			// populateOptions();

			console.log("1001:GOT:VALUE", { id, val });
		}
	}, [getPageData, id, optionId, setValue, value]);

	useEffect(() => {
		if (value) {
			console.log("1001:EDIT setValue", { value });
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
