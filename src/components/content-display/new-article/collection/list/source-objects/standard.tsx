import { ScreenWidth } from "@/src/hooks/useWidth";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import {
	Display,
	DisplayProps,
	ListItem,
	ListProps,
	RenderObjectReturn,
} from "../../../types";
import { addCssClasses } from "../../../utils";

import styles from "../styles/standard-list.module.scss";
import { displayItemStandard } from "../../../config/article-items/display";
import { listItemOneZero } from "../../../config/article-items/list-item";

type ListStyle = "none" | "bullets" | "numbered" | "";

// currently needs to be all  optional else typescript errors
// Need type this all properly
type Props = {
	columns?: number | undefined; // 1 - 5?
	listStyle?: "standard" | "topN";
	limit?: number;
	display?: boolean;
};

const renderList =
	(limit: number, display: boolean) => (articles: CollectionItem[]) => {
		let returnArticles = articles;
		if (limit) {
			// zero is all
			console.log("909", { limit });
			returnArticles = articles.slice(0, limit);
		}

		// again - just do the basics and add from there!
		// I think we should have a title available
		// i.e. - also read - and that can link somewhere
		// We should also have just links in lists

		return returnArticles.map(({ src }, index) => {
			let props = { ...listItemOneZero, src };

			if (display && index === 0) {
				return (
					<ArticleContainer
						key={src}
						src={src}
						props={{ ...displayItemStandard, src }}
					/>
				);
			}

			// think we don't want props object but actualt values
			return (
				<li key={src}>
					{/* We can pass styleSheet trick here
					Then we can really mod */}
					<ArticleContainer src={src} props={props} />
				</li>
			);
		});
	};

export const getStandardListRenderObject = (
	size: ScreenWidth,
	props: Props
): RenderObjectReturn<"ol"> => {
	const {
		columns = 4,
		listStyle = "topN",
		limit = 0,
		display = true,
	} = props || {};
	console.log("LIST ", { props });
	return {
		// config,
		// We need to properly check and convert string to number
		renderList: renderList(+limit, display),
		// config determines style and article props data
		// That way we can create dynamic without having multiple of these files
		// jus for styles changes
		styles: addCssClasses(
			styles.root,
			styles[size],
			styles[`columns-${columns}`],
			styles[listStyle],
			display ? styles.display : ""
		),
		styleSheet: null,
		as: "ol",
	};
};
