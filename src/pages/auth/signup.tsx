import styles from "./auth.module.css";
import React from "react";
import { withoutAuth } from "@/hoc/components/auth/withoutAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { SignUpForm } from "@/components/forms/auth/SignUpForm";
import { DTAHead } from "@/head/DTAHead";
import { getMainHeader } from "@/src/headers/get-headers";

function SignUp() {
	return (
		<>
			<DTAHead />
			<main className={styles.layout}>
				<SignUpForm />
			</main>
		</>
	);
}

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

export default withoutAuth(SignUp);
