import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Counter from "../features/counter/Counter";
import Display1 from "@/components/content/Display1";
import Display2 from "@/components/content/Display2";
import { Stack } from "@mui/material";
import Display3 from "@/components/content/Display3";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { i18namespace } from "@/lib/i18n/namespace-sets";

export default function Home(props: any) {
	const { t } = useTranslation(); //pass a prameter of 'Home' for a particular namespace / array?
	return (
		<>
			<Head>
				<title>{t("common:page-title")}</title>
				<meta name="description" content="First rendition" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>{t("common:page-title")}</h1>
				<Stack spacing={2}>
					<Counter />
					<Display1 />
					<Display2 />
					{/* Mui Grid is a little too simplistic */}
					<Display3 />
				</Stack>
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.home,
				...i18namespace.common,
			])),
		},
	};
}
