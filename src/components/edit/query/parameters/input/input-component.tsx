import { useContext, useEffect } from "react";
import { ParametersContext } from "../context/ParametersContext";
import { ParametersType } from "../types";
import { useFormContext, useWatch } from "react-hook-form";
import { QueryInputFactoryComponent } from "../../input/query-input-factory";
import { useUpdateParameters } from "../hooks/useUpdateParameters";
import { useUpdateParameterValue } from "../hooks/useUpdateParameterValue";

type ParameterInputProps = {
	parameterConfigData: ParametersType;
};

export const ParameterInputComponent = ({
	parameterConfigData,
}: ParameterInputProps) => {
	const { id, options, key, defaultValue } = parameterConfigData;
	const { objectKey, updateParameters } = useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	const { setValue } = useFormContext();

	// better name needed - is our state value
	const parameterFormState = useWatch({
		name: parameterId,
	});

	useUpdateParameters({
		id,
		key,
		options,
		parameterFormState,
		updateParameters,
	});

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
