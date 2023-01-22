import { TextField } from "@mui/material";
import React from "react";
import { withControl } from "../../hoc/components/forms/withControl";

//Way better
export const NewPasswordInput = ({
	label = "Auth:password",
	name = "password",
	field = {},
	error = false,
	helperText = "",
}) => {
	return (
		<TextField
			fullWidth={true}
			{...field}
			name={name}
			label={label}
			type="password"
			required
			variant="standard"
			error={error}
			helperText={helperText}
		></TextField>
	);
};

export const PasswordInputWithControl = withControl(NewPasswordInput);
