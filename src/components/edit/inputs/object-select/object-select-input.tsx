// @ts-nocheck / FIX ME
import { Box } from "@mui/material";
import { SelectInput, SelectInputProps } from "../select/select-input";
import {
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { inputMap } from "../input.map";

type OptionsMapProps = {
	optionsMap: Map<string, UnknownObject[]>;
	optionId: string;
};

type ObjectSelectInput = PropsWithChildren<SelectInputProps & OptionsMapProps>;

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
	// const value: string = useWatch({
	// 	name: id,
	// });
	const { control, setValue, getValues } = useFormContext();
	const value = getValues(id);
	// see src\components\edit\inputs\show\show-input.tsx
	// this could be reused with minor changes
	// We really need an inputs type of all available inputs
	const renderChildren = useCallback(
		(inputs: UnknownObject[] | undefined) => {
			// console.log("0001:D3:RENDER", { id, value });
			if (!inputs) {
				return null;
			}
			// Probably utils
			const idAsArray = id.split(".");
			const newIdAsArray = idAsArray.splice(0, idAsArray.length - 1);
			const newId = `${newIdAsArray.join(".")}.${optionId}`;

			return inputs.map((input) => {
				const { id: inputId, info, label, type, ...rest } = input;
				const Component = inputMap.get(type) || <></>;

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
		},
		[id, optionId, value]
	);

	// let chillerns = null;

	useEffect(() => {
		// There has to be  abug with Select perhaps
		// Seemed to be value getting wiped after initial set
		// But value okay on save / debug?
		if (value) {
			setComponents(renderChildren(optionsMap.get(value)));
		}
	}, [optionsMap, renderChildren, value]);

	// const chillerns = useMemo(
	// 	() => renderChildren(optionsMap.get(value)),
	// 	[optionsMap, renderChildren, value]
	// );

	return (
		<Box>
			<SelectInput info={info} id={id} label={label} options={options} />
			{components}
		</Box>
	);
};
