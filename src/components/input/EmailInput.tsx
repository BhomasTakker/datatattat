import { TextField } from "@mui/material";
import React from "react";
import { withControl } from "../../hoc/components/forms/withControl";

//Way better
export const NewEmailInput = ({
	label = "Auth:email",
	name = "email",
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
			type="email"
			required
			variant="standard"
			error={error}
			helperText={helperText}
		></TextField>
	);
};

export const EmailInputWithControl = withControl(NewEmailInput);
