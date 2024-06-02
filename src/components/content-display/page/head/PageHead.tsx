import Head from "next/head";
import { renderFavIcons } from "./fav-icons";
import { renderOpenGraphMeta } from "./open-graph";
import { renderTwitterCardMeta } from "./twitter-card";

interface Props {
	headData: { [key: string]: any };
}

//<link rel="icon" href="/favicon.ico" />
const FAV_ICON =
	"https://static.files.bbci.co.uk/core/website/assets/static/icons/touch/news/touch-icon-96.35ee2d1e2032bf2f1676.png";
// sizes="96x96"

// With any sub components - I believe you can only be nesteed one fragment deep
// Effectively - do not nest

// proper title component

// Any standard meta tags / meta tags
// description

// Add og: options
// twitter options

// favIcon as array of links
// provide url, select type, select rel, select size || blank
// I assume you would have to check these given urls!
// Only accept of expected types

export const PageHead = ({ headData }: Props) => {
	const {
		pageTitle,
		favIcons = [],
		openGraph = {},
		twitterCard = {},
		twitterCardShow = false,
		openGraphShow = false,
	} = headData || {};

	console.log("2342 PageHead", { headData, openGraph, twitterCard, favIcons });

	return (
		<Head>
			{/* Have a details component - title, description, author, etc */}
			{/* Page title OR Datatattat - capitalise(Route) || Route - Datatattat || @User Route Datatattat */}
			{/* Page data */}
			<title>{pageTitle || "Datatattat"}</title>
			<meta name="description" content={"description"} />
			{/*  */}
			{/* You would add multiple for different sizes */}
			{/* You would have apple-touch-icon-precomposed for diffreent sizes too */}
			{/* fav icons component */}
			{renderFavIcons({ icons: favIcons })}
			{openGraphShow && renderOpenGraphMeta({ data: openGraph })}
			{twitterCardShow && renderTwitterCardMeta({ data: twitterCard })}
			{/* {favIcons.map(({ rel, type, sizes, href }) => (
				<link
					key={`${href}&${sizes}`}
					rel={rel}
					type={type}
					href={href}
					sizes={sizes}
					data-rh="true"
				></link>
			))} */}
			{/* create ogs and twitter cards */}
			{/* 
			<meta data-rh="true" property="og:description" content="Palestinian officials say more than 300 bodies have been found at Nasser and al-Shifa hospitals."> 
			<meta data-rh="true" property="og:image" content="https://ichef.bbci.co.uk/news/1024/branded_news/10D07/production/_133217886_mediaitem133217885.jpg">
			<meta data-rh="true" property="og:image:alt" content="Palestinian civil defence workers dig mounds of earth in the grounds of Nasser hospital in Khan Younis, in the southern Gaza Strip (21 April 2024)">
			<meta data-rh="true" property="og:locale" content="en_GB">
			<meta data-rh="true" property="og:site_name" content="BBC News">
			<meta data-rh="true" property="og:title" content="UN rights chief 'horrified' by mass grave reports at Gaza hospitals">
			<meta data-rh="true" property="og:type" content="article">
			<meta data-rh="true" property="og:url" content="https://www.bbc.com/news/world-middle-east-68881325">

			<meta data-rh="true" name="twitter:card" content="summary_large_image">
			<meta data-rh="true" name="twitter:creator" content="@BBCNews">
			<meta data-rh="true" name="twitter:description" content="Palestinian officials say more than 300 bodies have been found at Nasser and al-Shifa hospitals.">
			<meta data-rh="true" name="twitter:image:src" content="https://ichef.bbci.co.uk/news/1024/branded_news/10D07/production/_133217886_mediaitem133217885.jpg">
			<meta data-rh="true" name="twitter:image:alt" content="Palestinian civil defence workers dig mounds of earth in the grounds of Nasser hospital in Khan Younis, in the southern Gaza Strip (21 April 2024)">
			<meta data-rh="true" name="twitter:site" content="@BBCNews">
			<meta data-rh="true" name="twitter:title" content="UN rights chief 'horrified' by mass grave reports at Gaza hospitals">

			*/}

			{/* what else would we have? - SEO jazz? */}

			{/* /////////////////////////////////////// */}
			{/* <link
				rel="icon"
				type="image/png"
				// fallback to ours - or nothing
				// we probably don't want to be too associated with random pages
				href={FAV_ICON}
				sizes="any"
				data-rh="true"
			></link> */}
		</Head>
	);
};
