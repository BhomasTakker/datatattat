import { Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
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
	default: string;
	prefix: string; // should be void  - use key
	postfix: string; // void??
	info: string;
	key: string;
};

const ParameterComponent = ({ data }: { data: ParametersType }) => {
	const { type, id, label, options, key } = data;
	const { objectKey, updateParameters } = useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	const parameterFormState = useWatch({
		name: parameterId,
	});

	useEffect(() => {
		const parameterValue = options
			? options[parameterFormState]
			: parameterFormState;
		updateParameters({ id: key, value: parameterValue });
	}, [id, key, options, parameterFormState, updateParameters]);

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
	return (
		<Stack>
			{parameters.map((param) => {
				return <ParameterComponent key={param.id} data={param} />;
			})}
		</Stack>
	);
};

// we could use a context object
// we need object key for forms
export const Parameters = ({
	params,
	objectKey,
}: {
	params: ParametersType[];
	objectKey: string;
}) => {
	return (
		<ParametersContextProvider value={{ objectKey }}>
			<ParametersList parameters={params} />
		</ParametersContextProvider>
	);
};
