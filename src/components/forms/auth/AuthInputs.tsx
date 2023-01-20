import { Box } from "@mui/material";
import React from "react";
import { EmailInput } from "../../input/EmailInput";
import { PasswordInput } from "../../input/PasswordInput";

type AuthInputsProps = {
	confirmPassword?: boolean;
};

export const AuthInputs = ({ confirmPassword = false }: AuthInputsProps) => {
	return (
		<>
			<Box>
				<EmailInput />
			</Box>

			<Box>
				<PasswordInput />
			</Box>
			{confirmPassword && (
				<Box>
					<PasswordInput label="Auth:confirm-password" name="confirm" />
				</Box>
			)}
		</>
	);
};
