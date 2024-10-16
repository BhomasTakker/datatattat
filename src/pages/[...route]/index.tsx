import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import mongooseConnect from "@/src/lib/mongoose-connection";
import Page from "@/models/Page";
import { getHeaders } from "@/src/headers/get-headers";
import { useTranslation } from "next-i18next";
import { PageDisplayContainer } from "@/src/components/content-display/page/page-display.container";

function ContentPage({ pageData }: any) {
	//this jazz is all largely shared between homepage, this content page, and user pages
	//Really could just be a content page
	// const { t } = useTranslation();
	if (!pageData) {
		return <div>Loading...</div>;
	}

	return <PageDisplayContainer pageData={pageData} />;
}

type ContextParams = {
	route: string[];
};

// preload pages
// get from db
export async function getStaticPaths() {
	return {
		// paths: [
		// 	{
		// 		params: {
		// 			route: ["news"],
		// 		},
		// 	},
		// ],
		paths: [],
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
	const page = await Page.findOne({ route: pageRoute }).lean();

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
