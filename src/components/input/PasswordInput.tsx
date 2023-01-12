import { TextField, Input } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";

//look at a withController? We won't always be using TextField
//'extend' a type and all should be required
type PasswordInputProps = {
	label?: string;
	name?: string;
	defaultValue?: string;
};

export const PasswordInput = ({
	label = "Auth:password",
	name = "password",
	defaultValue = "",
}: PasswordInputProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const { t } = useTranslation();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field }) => (
				<TextField
					fullWidth={true}
					{...field}
					// name={props.name || "password"}
					label={t(label)}
					type="password"
					required
					variant="standard"
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
