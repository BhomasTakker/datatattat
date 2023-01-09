import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type EmailInputProps = {
	label?: string;
	name?: string;
	defaultValue?: string;
};

//Technically is currently the same as PasswordInput but for label and type as password
//Is a simple input for timebeing
//verbose is better than generic sometimes
export const EmailInput = ({
	label = "email",
	name = "email",
	defaultValue = "",
}: EmailInputProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field }) => (
				<TextField
					{...field}
					name={name}
					label={label}
					type="email"
					required
					variant="outlined"
					error={!!errors[name]}
					// possibly render undefined in a situation or just typescript blah
					helperText={errors[name] ? `${errors[name]?.message}` : ""}
				></TextField>
			)}
		/>
	);
};

EmailInput.displayName = "EmailInput";
