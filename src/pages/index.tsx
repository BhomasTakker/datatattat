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
import Header from "@/models/Header";
import Footer from "@/models/Footer";
import { containerFactory } from "../factories/container-factory";

export default function Home(props: any) {
	const { t } = useTranslation(); //pass a prameter of 'Home' for a particular namespace / array?
	const { pageData, headerData, footerData } = props;
	const { content } = pageData;

	// console.log({ pageData });
	// console.log({ headerData });
	// console.log({ footerData });

	const Container = containerFactory(content);

	return (
		<>
			{/* Need create a head component / and / or render function for each page */}
			<Head>
				<title>{t(Common.pageTitle)}</title>
				<meta name="description" content="First rendition" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* We need to get the container and pass in content data */}
			{/* That should literally be it */}
			{/* Seems like a factory render - pass in content - blap container - pass in components or whatever */}
			<main className={styles.main}>
				<h1>{t(Common.pageTitle)}</h1>
				<Container data={content} />
				{/* <Stack spacing={2}>
					<Counter />
					<Display1 />
					<Display2 />
					<Display3 />
					<Test />
				</Stack> */}
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	//get pageData <- middleware!!!!
	//this has to be middleware?
	//We surely don't want to add to every page
	//I dunno man just do for now - is dynamic pages so a function call will do it

	//Put this in a function and spread into props
	await mongooseConnect();

	//Okay what is the proper return?
	//I shouldn'y need to JSONify
	//lean() strips any function stuff because we just want data but we will need to jsonify it to pass as porps
	const pageData = await Page.findOne({ route: "/" }).lean();

	//Why can't I populate!!!
	const headerData = await Header.findById(pageData.header.id).lean();
	const footerData = await Footer.findById(pageData.footer.id).lean();

	// console.log({ headerData });
	// console.log({ footerData });

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
			headerData: JSON.parse(JSON.stringify(headerData)),
			footerData: JSON.parse(JSON.stringify(footerData)),
		},
	};
}
