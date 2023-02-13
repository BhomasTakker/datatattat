import React from "react";
import {
	Controller,
	ControllerRenderProps,
	FieldValues,
	useFormContext,
} from "react-hook-form";
import { useTranslation } from "next-i18next";

type FormInputControl = {
	label: string;
	name: string;
	defaultValue?: string;
};

//TYPING
//we need withControl to work with all input types...
//With spreading props (We need to TYPE)
//I think this is okay?
//We need access to the props we need but the rest can be anything
export const withControl = (Component: any) => {
	//We need specify prop types to include
	return function InputWithFormControl(props: FormInputControl & any) {
		const { label, name, defaultValue = "" } = props;
		const {
			control,
			formState: { errors },
		} = useFormContext();

		//pass translated labels in?
		const { t } = useTranslation();

		return (
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				render={({ field }) => (
					<Component
						{...props}
						field={field}
						name={name}
						label={t(label)}
						error={!!errors[name]}
						helperText={errors[name] ? t(`${errors[name]?.message}`) : ""}
					></Component>
				)}
			/>
		);
	};
};
