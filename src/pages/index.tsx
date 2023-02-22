import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { Common } from "../lib/i18n/translation";
import mongooseConnect from "../lib/mongoose-connection";
import Page from "@/models/Page";
import Header from "@/models/Header";
import Footer from "@/models/Footer";
import { containerFactory } from "../factories/container-factory";
import { getHeaders, getMainHeader } from "../headers/get-headers";

export default function Home(props: any) {
	const { t } = useTranslation(); //pass a prameter of 'Home' for a particular namespace / array?
	const { pageData } = props;
	const { content } = pageData;

	// console.log({ content });
	//get? / use is interesting because that suggests that it could change
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
	// const headerData = await Header.findById(pageData.header.id).lean();
	const footerData = await Footer.findById(pageData.footer.id).lean();

	//This feels unneccessary as we'll be calling this on sign in etc, and it will rarely change
	//It's a dynamic site / unless you want full SSR you have to or load clientside
	//We have to/want to load the nav data dynamically but
	//but then maybe you wan't different options etc???
	const headerData = await getMainHeader();

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
			headerData: [headerData],
			footerData: JSON.parse(JSON.stringify(footerData)),
		},
	};
}
