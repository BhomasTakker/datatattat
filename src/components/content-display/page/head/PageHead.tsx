import Head from "next/head";
import { renderFavIcons } from "./fav-icons";
import { renderOpenGraphMeta } from "./open-graph";
import { renderTwitterCardMeta } from "./twitter-card";

interface Props {
	headData: { [key: string]: any };
}

const FAV_ICON =
	"https://static.files.bbci.co.uk/core/website/assets/static/icons/touch/news/touch-icon-96.35ee2d1e2032bf2f1676.png";

// With any sub Head components - I believe you can only be nesteed one fragment deep
// Effectively - do not nest

export const PageHead = ({ headData }: Props) => {
	const {
		pageTitle,
		favIcons = [],
		openGraph = {},
		twitterCard = {},
		twitterCardShow = false,
		openGraphShow = false,
	} = headData || {};

	return (
		<Head>
			{/* Can we get our name from somewhere please! */}
			<title>{pageTitle || "Datatattat"}</title>
			<meta name="description" content={"description - add me!!!!"} />
			{renderFavIcons({ icons: favIcons })}
			{openGraphShow && renderOpenGraphMeta({ data: openGraph })}
			{twitterCardShow && renderTwitterCardMeta({ data: twitterCard })}
		</Head>
	);
};
