import React from "react";
import styles from "./auth.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/head/DTAHead";
import { withAuth } from "@/hoc/components/auth/withAuth";
import { DeleteAccountForm } from "@/components/forms/auth/DeleteAccountForm";
import { getMainHeader } from "@/src/headers/get-headers";

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

//All auth getStatic Props are the same and likely will remain so
//Could just return a shared function
//this is rendered irrelevant with a Next13 app folder
export async function getStaticProps({ locale }: { locale: string }) {
	const headerData = await getMainHeader();
	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.auth,
				...i18namespace.common,
			])),
			headerData: [headerData],
		},
	};
}

export default withAuth(DeleteAccount);
