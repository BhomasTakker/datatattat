import { TextField } from "@mui/material";
import React, { useState } from "react";

type PasswordInputProps = {
	label?: string;
};

export const PasswordInput = React.forwardRef(
	(props: PasswordInputProps, ref) => {
		//We would probably want something more like this for finer grained control
		const [value, setValue] = useState<string>("");
		const [edited, setEdited] = useState<boolean>(false);
		return (
			<TextField
				label={props.label || "password"}
				// helperText={
				// 	!value && edited
				// 		? "Required"
				// 		: "Do not share your password with anyone"
				// }
				type="password"
				required
				variant="outlined"
				inputRef={ref}
				// value={value}
				// onChange={(e) => {
				// 	setValue(e.target.value);
				// 	setEdited(true);
				// }}
				// error={!value && edited}
				// InputProps={{
				// 	endAdornment: (
				// 		<InputAdornment position="end">
				// 			<VisibilityIcon onClick={() => {}} />
				// 		</InputAdornment>
				// 	),
				// }}
			></TextField>
		);
	}
);

PasswordInput.displayName = "PasswordInput";
