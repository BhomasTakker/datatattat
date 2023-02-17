import { Typography } from "@mui/material";
import React from "react";
import { withAuth } from "@/hoc/components/auth/withAuth";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/src/head/DTAHead";
import { useUser } from "@/src/hooks/useUser";
import { LoadingSpinner } from "@/src/components/loading/LoadingSpinner";

function EditPage() {
	//Should return error
	const { user, isLoading } = useUser();
	const router = useRouter();

	if (!user && isLoading) {
		return <LoadingSpinner />;
	}
	if (!user && !isLoading) {
		return <>Error. We should flag and redirect</>;
	}

	//default value of {} is not null right
	//We slipped through
	if (!user.page) {
		router.replace("/edit/landing");
	}

	//if(user.pages.length === 0)//i.e. if no landing page then create landing page
	//redirect to Edit Home page

	return (
		<>
			<DTAHead />
			<main>
				<Typography variant="h1">Edit Pages</Typography>
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.profile,
				...i18namespace.common,
			])),
		},
	};
}

export default withAuth(EditPage);
