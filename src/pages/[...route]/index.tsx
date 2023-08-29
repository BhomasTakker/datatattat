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
import { PageContainerFactoryComponent } from "@/src/components/content-display/page-containers/page-container.factory";
import { PageDisplayContainer } from "@/src/components/content-display/page/page-display.container";

//type input - this needs to change
function ContentPage({ pageData }: any) {
	//this jazz is all largely shared between homepage, this content page, and user pages
	//Really could just be a content page
	const { t } = useTranslation();
	if (!pageData) {
		return <div>Loading...</div>;
	}
	const { content } = pageData;

	const Container = containerFactory(content) || <></>;

	console.log({ content });
	console.log({ Container });

	// return <></>;

	return (
		<PageDisplayContainer pageData={pageData} />
		// <>
		// 	{/* Content Page, etc */}
		// 	{/* We should probably just call a generic content page if we can */}
		// 	{/* PageContainer, PageContext */}
		// 	{/* Contain Head, Title, etc, Component, HTML, Style */}
		// 	{/* That way you could ultimately add individual style no */}
		// 	<DTAHead />
		// 	{/* Remove styling - or some of it */}
		// 	<main className={styles.main}>
		// 		{/* Remove title from here */}
		// 		<h1>{t(Common.pageTitle)}</h1>
		// 		<PageContainerFactoryComponent contentData={content} />
		// 		{/* <Container data={content} /> */}
		// 	</main>
		// </>
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

	console.log("We are here");

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
