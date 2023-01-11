import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";

//'extend' a type
type PasswordInputProps = {
	label?: string;
	name?: string;
	defaultValue?: string;
};

export const PasswordInput = ({
	label = "password",
	name = "password",
	defaultValue = "",
}: PasswordInputProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const { t } = useTranslation();

	return (
		//This is a withComponent
		//TextField withFormController
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field }) => (
				<TextField
					{...field}
					// name={props.name || "password"}
					label={label}
					type="password"
					required
					variant="outlined"
					error={!!errors[name]}
					// possibly render undefined in a situation or just typescript blah
					helperText={errors[name] ? t(`${errors[name]?.message}`) : ""}
					// helperText="I dunno man"
				></TextField>
			)}
		></Controller>
	);
};

PasswordInput.displayName = "PasswordInput";
