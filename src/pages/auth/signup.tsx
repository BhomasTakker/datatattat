import { Container } from "@mui/material";
import React from "react";
import { withoutAuth } from "../../hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "../../lib/i18n/namespace-sets";
import { SignUpForm } from "../../components/forms/auth/SignUpForm";

function SignUp() {
	return (
		<Container>
			<SignUpForm />
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

export default withoutAuth(SignUp);
