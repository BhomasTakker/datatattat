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
		const {
			label,
			name,
			defaultValue = "",
			disabled = false,
			required = false, //try this in rules / currently we are using default mui
		} = props;
		const {
			control,
			formState: { errors },
		} = useFormContext();

		//pass translated labels in?
		const { t } = useTranslation();

		return (
			<Controller
				name={name}
				control={control} //potentially picked up because form proovider use?
				defaultValue={defaultValue}
				//We may be stuck with basic validation ??
				//You can pass a validation function or just options into rules.validate
				//So we can bypass our overly complicated yupe situation
				// the below works but needs ignoring / apparently it just hasn't been typed?
				// @ts-expect-error / find a way around
				rules={{ disabled }}
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
