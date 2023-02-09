import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { withControl } from "@/hoc/components/forms/withControl";
import { Auth } from "@/src/lib/i18n/translation";

//Way better
export const UsernameInput = ({
	label = "username", //Auth.email,
	name = "username",
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
			type="text"
			required
			variant="standard"
			error={error}
			helperText={helperText}
			InputProps={{
				startAdornment: <InputAdornment position="start">@</InputAdornment>,
			}}
		></TextField>
	);
};

export const UsernameInputWithControl = withControl(UsernameInput);
