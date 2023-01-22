import { Box } from "@mui/material";
import React from "react";
import { EmailInputWithControl } from "../../input/EmailInput";
import { PasswordInputWithControl } from "../../input/PasswordInput";

type AuthInputsProps = {
	confirmPassword?: boolean;
};

export const AuthInputs = ({ confirmPassword = false }: AuthInputsProps) => {
	return (
		<>
			<Box>
				{/* <EmailInput /> */}
				<EmailInputWithControl label="Auth:email" name="email" />
			</Box>

			<Box>
				{/* <PasswordInput /> */}
				<PasswordInputWithControl label="Auth:password" name="password" />
			</Box>
			{confirmPassword && (
				<Box>
					{/* We really need to sort out how we manage text ids for translation
					feels like trans.auth.confirmPassword
					*/}
					<PasswordInputWithControl
						label="Auth:confirm-password"
						name="confirm"
					/>
				</Box>
			)}
		</>
	);
};
