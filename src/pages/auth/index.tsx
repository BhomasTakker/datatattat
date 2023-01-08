import { Container } from "@mui/material";
import React from "react";
import { SignUpSignInForm } from "../../components/forms/auth/SignUpForm";
import { withoutAuth } from "../../hoc/components/auth/withoutAuth";

function AuthForm() {
	return (
		<Container>
			<SignUpSignInForm />
		</Container>
	);
}

export default withoutAuth(AuthForm);
