import { Box } from "@mui/material";
import React from "react";
import { EmailInput } from "../../input/EmailInput";
import { PasswordInput } from "../../input/PasswordInput";

export const AuthInputs = () => {
	return (
		<>
			<Box>
				<EmailInput />
			</Box>
			{/* 
					TODO
					Confirm password box 
					*/}
			<Box>
				<PasswordInput />
			</Box>
		</>
	);
};
