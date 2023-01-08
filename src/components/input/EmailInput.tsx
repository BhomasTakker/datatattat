import { TextField } from "@mui/material";
import React from "react";

//Technically is currently the same as PasswordInput but for label and type as password
//Is a simple input for timebeing
//verbose is better than generic sometimes
export const EmailInput = React.forwardRef((props, ref) => {
	return (
		<TextField
			label="email"
			type="email"
			required
			variant="outlined"
			inputRef={ref}
		></TextField>
	);
});

EmailInput.displayName = "EmailInput";
