import { Container } from "@mui/material";
import React from "react";
import { SignUpSignInForm } from "../../components/forms/auth/SignUpForm";
import { withoutAuth } from "../../hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "../../lib/i18n/namespace-sets";

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
				i18namespace.auth,
				...i18namespace.common,
			])),
		},
	};
}

export default withoutAuth(AuthForm);
