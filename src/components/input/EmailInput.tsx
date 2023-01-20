//This all needs work...
//massive go through
//no way this is the best approach
import { TextField } from "@mui/material";
import React, { ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";

//shouldn't be here / pass trnslation in
//We actually have to since error ??
import { useTranslation } from "next-i18next";

//these components need properly thinking about
//withController works
//TextField can be stripped down - no real distinction between email and password but props
type EmailInputProps = {
	label?: string;
	name?: string;
	defaultValue?: string;
};

//Technically is currently the same as PasswordInput but for label and type as password
//Is a simple input for timebeing
//verbose is better than generic sometimes
export const EmailInput = ({
	//we're going to need a way better way of managing this
	label = "Auth:email",
	name = "email",
	defaultValue = "",
}: EmailInputProps): ReactElement => {
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
					name={name}
					label={t(label)}
					type="email"
					required
					variant="standard"
					error={!!errors[name]}
					// possibly render undefined in a situation or just typescript blah
					// helperText={errors[name] ? `${errors[name]?.message}` : ""}
					helperText={errors[name] ? t(`${errors[name]?.message}`) : ""}
				></TextField>
			)}
		/>
	);
};

EmailInput.displayName = "EmailInput";
