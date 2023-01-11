import { Container } from "@mui/material";
import React from "react";
import { SignUpSignInForm } from "../../components/forms/auth/SignUpForm";
import { withoutAuth } from "../../hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function AuthForm() {
	return (
		<Container>
			<SignUpSignInForm />
		</Container>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"Auth",
				"Header",
				"common",
				"Notifications",
				"Validation",
			])),
		},
	};
}

export default withoutAuth(AuthForm);
