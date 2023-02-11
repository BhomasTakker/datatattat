import { Typography } from "@mui/material";
import React from "react";
import { withAuth } from "@/hoc/components/auth/withAuth";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/src/head/DTAHead";
import { useUser } from "@/src/hooks/useUser";
import { LoadingSpinner } from "@/src/components/loading/LoadingSpinner";

function EditHomePage() {
	//Should return error
	const { user, isLoading } = useUser();

	console.log({ user });
	if (!user && isLoading) {
		return <LoadingSpinner />;
	}

	// if user already has a landing page redirect to edit
	//perhaps unneccessary - in edit just default to create page or something

	return (
		<>
			<DTAHead />
			<main>
				<Typography variant="h1">Landing Page Edit</Typography>
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

export default withAuth(EditHomePage);
