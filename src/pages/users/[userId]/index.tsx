import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { User } from "@/models/User";
import mongooseConnect from "@/src/lib/mongoose-connection";
import Page from "@/models/Page";
import { getHeaders } from "@/src/headers/get-headers";
import { PageDisplayContainer } from "@/src/components/content-display/page/page-display.container";

function UserLanding({ username, pageData, headerData, footerData }: any) {
	if (!pageData) {
		return <div>Loading...</div>;
	}

	return <PageDisplayContainer pageData={pageData} />;
}

type ContextParams = {
	userId: string;
};

export async function getStaticPaths() {
	//
	return {
		paths: [
			// {
			// 	params: {
			// 		userId: "Tumus",
			// 	},
			// },
		],
		fallback: true,
	};
}

//this is rendered irrelevant with a Next13 app folder
export async function getStaticProps({
	locale,
	params,
}: {
	locale: string;
	params: ContextParams;
}) {
	//We need to check signed in or not
	//if signed in - is this you
	await mongooseConnect();
	const { userId } = params;
	//We may want to strip msome data from here
	//i.e. just send page data
	const user = await User.findOne({ username: userId }).lean();

	if (!user) {
		return {
			notFound: true,
		};
	}

	//fin page by route
	const page = await Page.findOne({ route: `/users/${userId}` }).lean();

	// const page = user.page;
	if (!page) {
		return {
			redirect: {
				destination: `/users/${userId}/profile`,
			},
		};
	}

	// const pageData = await Page.findById(page).lean();

	//Why can't I populate!!!
	// const headerData = await Header.findById(pageData.header.id).lean();
	// const headerData = await getMainHeader();
	// // console.log({ headerData });
	const headerAndSubHeader = await getHeaders(`/users/${userId}`); //pageData.header.id
	// // console.log({ headerAndSubHeader });
	//just get by route or user?
	// const footerData = await Footer.findById(page.footer.id).lean();

	return {
		props: {
			// Call a function with the page to return this jazz
			...(await serverSideTranslations(locale, [
				i18namespace.auth,
				...i18namespace.common,
			])),
			// user: JSON.parse(JSON.stringify(user)),
			username: user.username,
			pageData: JSON.parse(JSON.stringify(page)),
			headerData: headerAndSubHeader,
			// footerData: JSON.parse(JSON.stringify(footerData)),
		},
	};
}

export default UserLanding;
