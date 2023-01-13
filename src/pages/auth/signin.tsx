import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./auth.module.css";
import { withoutAuth } from "../../hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "../../lib/i18n/namespace-sets";
import { SignInForm } from "../../components/forms/auth/SignInForm";
import { useTranslation } from "next-i18next";
import { DTAHead } from "../../head/DTAHead";

function SignIn() {
	const { t } = useTranslation();
	return (
		<>
			<DTAHead />
			<main className={styles.layout}>
				<Box className={styles.content}>
					{/* create title */}
					<Typography variant="h4" component="h1">
						{t("Auth:login")}
					</Typography>
					<SignInForm />
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

export default withoutAuth(SignIn);
