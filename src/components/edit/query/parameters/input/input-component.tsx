import { useContext } from "react";
import { ParametersContext } from "../context/ParametersContext";
import { ParametersType } from "../types";
import { useFormContext, useWatch } from "react-hook-form";
import { QueryInputFactoryComponent } from "../../input/query-input-factory";
import { useUpdateParameterValue } from "../hooks/useUpdateParameterValue";

type ParameterInputProps = {
	parameterConfigData: ParametersType;
};

// Go through
// This can probably be better/more simply done with context
export const ParameterInputComponent = ({
	parameterConfigData,
}: ParameterInputProps) => {
	const { id, options, defaultValue } = parameterConfigData;
	const { objectKey } = useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	const { setValue } = useFormContext();

	// better name needed - is our state value
	// should be taken from context
	// ISSUE:54321 - whatever the hell this is
	const parameterFormState = useWatch({
		name: parameterId,
	});

	// This should be handled by context object
	// is setDefault if no state value
	// or select value coming back as undefined. ...
	useUpdateParameterValue({
		id: parameterId,
		defaultValue,
		setValue,
		options,
		parameterFormState,
	});
	// check the nullish value / if no objectKey then do not render
	// is an error situation
	return (
		<QueryInputFactoryComponent
			queryInputData={parameterConfigData}
			objectKey={objectKey!}
		/>
	);
};
