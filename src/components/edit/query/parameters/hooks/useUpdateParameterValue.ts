import { useEffect } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

type UseUpdateParameterValue = {
	id: string;
	options: any;
	defaultValue: string;
	parameterFormState: any;
	setValue: UseFormSetValue<FieldValues>;
};

export const useUpdateParameterValue = ({
	id,
	defaultValue,
	setValue,
	options,
	parameterFormState,
}: UseUpdateParameterValue) => {
	useEffect(() => {
		if (!defaultValue) {
			return;
		}

		if (
			!parameterFormState ||
			(options && typeof options?.[parameterFormState] !== "string")
		) {
			setValue(id, defaultValue);
		}
	}, [id, defaultValue, setValue, options, parameterFormState]);
};
