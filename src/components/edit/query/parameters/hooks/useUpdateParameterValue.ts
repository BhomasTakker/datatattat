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
			setValue(id, defaultValue);
		}
	}, [id, defaultValue, setValue, options, parameterFormState]);
};