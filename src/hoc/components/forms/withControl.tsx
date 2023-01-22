import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";

type FormInputControl = {
	label: string;
	name: string;
	defaultValue?: string;
};

export const withControl = (Component: any) => {
	return function InputWithFormControl({
		label,
		name,
		defaultValue = "",
	}: FormInputControl) {
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
