import { Stack } from "@mui/material";
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { EditSelectInput, EditTextInput } from "../RssInputComponents";
import {
	ParametersContext,
	ParametersContextProvider,
} from "./ParametersContext";
import { useFormContext, useWatch } from "react-hook-form";

type ParametersType = {
	type: string;
	id: string;
	label: string;
	options: string[];
	defaultValue: string;
	prefix: string; // should be void  - use key
	postfix: string; // void??
	info: string;
	key: string;
};

// We can surely share this with api parameters?
// at least component code is largely similar
const ParameterComponent = ({ data }: { data: ParametersType }) => {
	const { type, id, label, options, key, defaultValue } = data;
	const { objectKey, updateParameters, shouldCreateParametersString } =
		useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	const { setValue } = useFormContext();

	// better name needed - is our state value
	const parameterFormState = useWatch({
		name: parameterId,
	});

	useEffect(() => {
		// We are checking this to find out type of input
		// when we have type.
		// type makes it easier
		const parameterValue = options
			? options[parameterFormState]
			: parameterFormState;
		updateParameters({ id: key, value: parameterValue });
	}, [id, key, options, parameterFormState, updateParameters]);

	useEffect(() => {
		// Tests to set input to default value on change
		// Checks if current value exists in current endpoints
		// if both choices share a field/endpoint then I believe it won't pick default

		// if no current value
		// OR
		// there are options
		// AND options[value] is not a string i.e. illeagal value?
		// provide the default value

		if (
			!parameterFormState ||
			(options && typeof options?.[parameterFormState] !== "string")
		) {
			setValue(parameterId, defaultValue);
		}
	}, [parameterId, defaultValue, setValue, options, parameterFormState]);

	switch (type) {
		case "text":
			return <EditTextInput id={parameterId} label={label} />;

		case "select":
			return (
				<EditSelectInput endpoints={options} id={parameterId} label={label} />
			);
		default:
			return <></>;
	}
};

const ParametersList = ({
	parameters = [],
}: {
	parameters: ParametersType[];
}) => {
	const createParametersList = useCallback((parameters: ParametersType[]) => {
		return parameters.map((param) => {
			return <ParameterComponent key={param.id} data={param} />;
		});
	}, []);
	return (
		<Stack>
			{useMemo(
				() => createParametersList(parameters),
				[createParametersList, parameters]
			)}
		</Stack>
	);
};

// we could use a context object
// we need object key for forms
export const Parameters = ({
	params,
	objectKey,
	shouldCreateParametersString = true,
}: {
	params: ParametersType[];
	objectKey: string;
	shouldCreateParametersString?: boolean;
}) => {
	return (
		<ParametersContextProvider
			value={{ objectKey, shouldCreateParametersString }}
		>
			{/* Why pass parameters when using context */}
			<ParametersList parameters={params} />
		</ParametersContextProvider>
	);
};
