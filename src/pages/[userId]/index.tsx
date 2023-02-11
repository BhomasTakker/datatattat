import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/head/DTAHead";
import { User } from "@/models/User";
import mongooseConnect from "@/src/lib/mongoose-connection";

function UserLanding({ user }: any) {
	console.log({ user });

	if (!user) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<DTAHead />
			<main>
				<div>User Landing Page</div>
			</main>
		</>
	);
}

type ContextParams = {
	userId: string;
};

export async function getStaticPaths() {
	//
	return {
		paths: [
			{
				params: {
					userId: "Tumus",
				},
			},
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

	console.log({ user });
	const pages = user.pages || [];
	if (pages.length === 0) {
		return {
			redirect: {
				destination: `/${userId}/profile`,
			},
		};
	}

	return {
		props: {
			// Call a function with the page to return this jazz
			...(await serverSideTranslations(locale, [
				i18namespace.auth,
				...i18namespace.common,
			])),
			user: JSON.parse(JSON.stringify(user)),
		},
	};
}

export default UserLanding;
