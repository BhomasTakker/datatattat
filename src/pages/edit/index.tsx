import { Typography } from "@mui/material";
import React from "react";
import { withAuth } from "@/hoc/components/auth/withAuth";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/src/head/DTAHead";
import { NewPage } from "@/src/components/forms/edit/NewPage";
import { getMainHeader } from "@/src/headers/get-headers";

function EditHomePage() {
	return (
		<>
			<DTAHead />
			<main>
				{/* <Typography variant="h1">Edit Page</Typography> */}
				{/* if no pages  */}
				{/* <Typography variant="body1">{`
				Here you can create a landing page unique to you.
				You can shout about yur accomplishements, express your interests, or shout about the things that matter to you. 
				Whatever you want to broadcast we're here to help.
				We have created guides to take you through the process, and don't worry if things aren't perfect first time round, 
				you can always come back to edit in future.
				It may be something that you keep updating, because life will never stay the same. 
				Welcome to Datatattat, we hope you learn, teach, and enjoy yourself!
				`}</Typography> */}
				{/* This is just EditPage */}
				<NewPage />
				{/* If exists then go to page - perhaps demo page */}
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	const headerData = await getMainHeader();
	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.profile,
				...i18namespace.common,
			])),
			headerData: [headerData],
		},
	};
}

export default withAuth(EditHomePage);
