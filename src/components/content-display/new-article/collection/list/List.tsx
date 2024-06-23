import { ReactElement } from "react";
import styles from "./List.module.scss";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { useCssClasses } from "../../hooks/useCssClasses";

type ArticleList = {
	as?: "ul" | "ol";
	classes?: string;
	articles: CollectionItem[];
	renderList: (items: CollectionItem[]) => ReactElement[];
};

export const ArticleList = ({
	as = "ol",
	articles = [],
	renderList,
	classes,
}: ArticleList) => {
	const As = as;
	const root = useCssClasses(styles.root, classes);

	return <As className={root}>{renderList(articles)}</As>;
};
