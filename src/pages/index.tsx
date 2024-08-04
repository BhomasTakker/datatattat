import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import mongooseConnect from "../lib/mongoose-connection";
import Page from "@/models/Page";
import Footer from "@/models/Footer";
import { getMainHeader } from "../headers/get-headers";
import { PageDisplayContainer } from "../components/content-display/page/page-display.container";

export default function Home(props: any) {
	// const { t } = useTranslation(); //pass a prameter of 'Home' for a particular namespace / array?
	const { pageData } = props;

	return <PageDisplayContainer pageData={pageData} />;
}

export async function getStaticProps({ locale }: { locale: string }) {
	await mongooseConnect();

	//lean() strips any function stuff because we just want data but we will need to jsonify it to pass as porps
	const pageData = await Page.findOne({ route: "/" }).lean();
	const headerData = await getMainHeader();

	// What here?
	if (!pageData) {
		//would actually go with something like throw createError(error.id)
		// console.log("ERROR");
	}

	// const footerData = (await Footer.findById(pageData?.footer?.id).lean()) || {};

	return {
		props: {
			//confusing blind copy - do properly
			...(await serverSideTranslations(locale, [
				i18namespace.home,
				...i18namespace.common,
			])),

			pageData: JSON.parse(JSON.stringify(pageData)),
			headerData: [headerData],
			// footerData: JSON.parse(JSON.stringify(footerData)),
		},
	};
}
