import styles from "./auth.module.css";
import { Box, Typography } from "@mui/material";
import React from "react";
import { withoutAuth } from "../../hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "../../lib/i18n/namespace-sets";
import { SignUpForm } from "../../components/forms/auth/SignUpForm";
import { DTAHead } from "../../head/DTAHead";
import { useTranslation } from "next-i18next";

function SignUp() {
	const { t } = useTranslation();
	return (
		<>
			<DTAHead />
			<main className={styles.layout}>
				<Box className={styles.content}>
					<Typography variant="h4" component="h1">
						{t("Auth:sign-up")}
					</Typography>
					<SignUpForm />
				</Box>
			</main>
		</>
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
