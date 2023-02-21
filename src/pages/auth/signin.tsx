import React from "react";
import styles from "./auth.module.css";
import { withoutAuth } from "@/hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { SignInForm } from "@/components/forms/auth/SignInForm";
import { DTAHead } from "@/head/DTAHead";
import { getMainHeader } from "@/src/headers/get-headers";

function SignIn() {
	return (
		<>
			<DTAHead />
			<main className={styles.layout}>
				<SignInForm />
			</main>
		</>
	);
}

//this is rendered irrelevant with a Next13 app folder
export async function getStaticProps({ locale }: { locale: string }) {
	const headerData = await getMainHeader();
	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.auth,
				...i18namespace.common,
			])),
			headerData,
		},
	};
}

export default withoutAuth(SignIn);
