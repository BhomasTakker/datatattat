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
		// Probably a bug
		// Don't set value to defaulkt if default = undefined
		// But why is parametersFormState undefined...
		if (!defaultValue) {
			return;
		}
		// Tests to set input to default value on change
		// Checks if current value exists in current endpoints
		// if both choices share a field/endpoint then I believe it won't pick default

		// if no current value
		// OR
		// there are options
		// AND options[value] is not a string i.e. illeagal value?
		// provide the default value
		console.log(
			"ISSUE:5891",
			"SET:VALUE:OUTER",
			{ id },
			{ defaultValue },
			{ parameterFormState },
			{ options }
		);

		if (
			!parameterFormState ||
			(options && typeof options?.[parameterFormState] !== "string")
		) {
			console.log(
				"ISSUE:5891",
				"SET:VALUE",
				{ id },
				{ defaultValue },
				{ parameterFormState },
				{ options }
			);
			setValue(id, defaultValue);
		}
	}, [id, defaultValue, setValue, options, parameterFormState]);
};
