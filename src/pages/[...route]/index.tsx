import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/head/DTAHead";
import { User } from "@/models/User";
import mongooseConnect from "@/src/lib/mongoose-connection";
import Page from "@/models/Page";
import { containerFactory } from "@/src/factories/container-factory";
import { getHeaders, getMainHeader } from "@/src/headers/get-headers";
import { Common } from "@/src/lib/i18n/translation";
import styles from "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

//type input - this needs to change
function ContentPage({ pageData }: any) {
	//this jazz is all largely shared between homepage, this content page, and user pages
	//Really could just be a content page
	const { t } = useTranslation();
	if (!pageData) {
		return <div>Loading...</div>;
	}
	const { content } = pageData;

	const Container = containerFactory(content);

	return (
		<>
			<DTAHead />
			<main className={styles.main}>
				<h1>{t(Common.pageTitle)}</h1>
				<Container data={content} />
			</main>
		</>
	);
}

type ContextParams = {
	route: string[];
};

export async function getStaticPaths() {
	//
	return {
		paths: [
			{
				params: {
					route: ["news"],
				},
			},
		],
		fallback: true,
	};
}

export async function getStaticProps({
	locale,
	params,
}: {
	locale: string;
	params: ContextParams;
}) {
	await mongooseConnect();
	const { route } = params;
	//this will be an array ['news', 'world', 'Europe']

	const pageRoute = `/${route.join("/")}`;

	console.log({ route });

	const page = await Page.findOne({ route: pageRoute }).lean();

	console.log({ page });

	if (!page) {
		return {
			redirect: {
				destination: `/`,
			},
		};
	}

	const headerAndSubHeader = await getHeaders(pageRoute);

	return {
		props: {
			// Call a function with the page to return this jazz
			...(await serverSideTranslations(locale, [
				i18namespace.auth,
				...i18namespace.common,
			])),

			pageData: JSON.parse(JSON.stringify(page)),
			headerData: headerAndSubHeader,
			// footerData: JSON.parse(JSON.stringify(footerData)),
		},
	};
}

export default ContentPage;
