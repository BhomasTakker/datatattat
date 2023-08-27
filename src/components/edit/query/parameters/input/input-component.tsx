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

// Go through
// This can probably be better/more simply done with context
export const ParameterInputComponent = ({
	parameterConfigData,
}: ParameterInputProps) => {
	const { id, options, key, defaultValue } = parameterConfigData;
	const { objectKey } = useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	const { setValue } = useFormContext();

	// better name needed - is our state value
	// should be taken from context
	const parameterFormState = useWatch({
		name: parameterId,
	});

	// these seem bad practice
	// should be controlled in context
	// ruun through - update parameters calls a set on paremeters list
	// but this map is never referenced
	// this hook etc ultimqately does nothing
	// useUpdateParameters({
	// 	id,
	// 	key,
	// 	options,
	// 	parameterFormState,
	// 	updateParameters,
	// });

	// console.log(
	// 	"ISSUE:589",
	// 	"INPUT:COMPONENT",
	// 	{ parameterConfigData },
	// 	{ defaultValue },
	// 	{ objectKey },
	// 	{ parameterId },
	// 	{ parameterFormState }
	// );

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
