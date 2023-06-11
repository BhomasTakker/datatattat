import { useTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
import { Common } from "../lib/i18n/translation";

export const DTAHead = () => {
	const { t } = useTranslation();
	return (
		<Head>
			<title>{t(Common.pageTitle)}</title>
			<meta name="description" content="First rendition" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			{/* Sort this/these can't really just have everywhere? */}
			<script
				async
				src="https://platform.twitter.com/widgets.js"
				// charSet="utf-8"
			></script>
			<script async src="https://www.tiktok.com/embed.js"></script>
		</Head>
	);
};
