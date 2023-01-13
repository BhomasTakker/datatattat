import { useTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";

export const DTAHead = () => {
	const { t } = useTranslation();
	return (
		<Head>
			<title>{t("common:page-title")}</title>
			<meta name="description" content="First rendition" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};
