import React from "react";
import styles from "./auth.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "../../lib/i18n/namespace-sets";
import { DTAHead } from "../../head/DTAHead";
import { withAuth } from "../../hoc/components/auth/withAuth";
import { DeleteAccountForm } from "@/components/forms/auth/DeleteAccountForm";

function DeleteAccount() {
	return (
		<>
			<DTAHead />
			<main className={styles.layout}>
				<DeleteAccountForm />
			</main>
		</>
	);
}

//this is rendered irrelevant with a Next13 app folder
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

export default withAuth(DeleteAccount);
