import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import mongooseConnect from "../lib/mongoose-connection";
import Page from "@/models/Page";
import Footer from "@/models/Footer";
import { getMainHeader } from "../headers/get-headers";
import { PageDisplayContainer } from "../components/content-display/page/page-display.container";

export default function Home(props: any) {
	const { t } = useTranslation(); //pass a prameter of 'Home' for a particular namespace / array?
	const { pageData } = props;

	return <PageDisplayContainer pageData={pageData} />;
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

	// If no page data we need to provide default

	//This feels unneccessary as we'll be calling this on sign in etc, and it will rarely change
	//It's a dynamic site / unless you want full SSR you have to or load clientside
	//We have to/want to load the nav data dynamically but
	//but then maybe you wan't different options etc???
	const headerData = await getMainHeader();

	// What here?
	if (!pageData) {
		//would actually go with something like throw createError(error.id)
		// console.log("ERROR");
	}

	//Why can't I populate!!!
	// const headerData = await Header.findById(pageData.header.id).lean();
	const footerData = (await Footer.findById(pageData?.footer?.id).lean()) || {};

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
