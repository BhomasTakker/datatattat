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
import { Common } from "../lib/i18n/translation";
import { Test } from "../components/content/tempComponent";
import mongooseConnect from "../lib/mongoose-connection";
import Page from "@/models/Page";

export default function Home(props: any) {
	const { t } = useTranslation(); //pass a prameter of 'Home' for a particular namespace / array?
	const { pageData } = props;

	console.log({ pageData });

	return (
		<>
			<Head>
				<title>{t(Common.pageTitle)}</title>
				<meta name="description" content="First rendition" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>{t(Common.pageTitle)}</h1>
				<Stack spacing={2}>
					<Counter />
					<Display1 />
					<Display2 />
					{/* Mui Grid is a little too simplistic */}
					<Display3 />
					<Test />
				</Stack>
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	//get pageData <- middleware!!!!
	//this has to be middleware?
	//We surely don't want to add to every page
	//I dunno man just do for now - is dynamic pages so a function call will do it

	await mongooseConnect();

	//Okay what is the proper return?
	//I shouldn'y need to JSONify
	//lean() strips any function stuff because we just want data but we will need to jsonify it to pass as porps
	const pageData = await Page.findOne({ route: "/" }).lean();

	console.log({ pageData });

	if (!pageData) {
		//would actually go with something like throw createError(error.id)
		console.log("ERROR");
	}

	// const pageData = { data: "Hello World!" };

	return {
		props: {
			//confusing blind copy - do properly
			...(await serverSideTranslations(locale, [
				i18namespace.home,
				...i18namespace.common,
			])),

			pageData: JSON.parse(JSON.stringify(pageData)),
		},
	};
}
