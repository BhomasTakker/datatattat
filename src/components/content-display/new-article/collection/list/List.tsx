import { PropsWithChildren, ReactElement } from "react";
import styles from "./List.module.scss";

type ArticleList = {
	as?: "ul" | "ol";
	articles: ReactElement[];
};

export const ArticleList = ({ as = "ol", articles = [] }: ArticleList) => {
	const As = as;
	const renderArticles = articles.map((article) => (
		<li key={article.key}>{article}</li>
	));
	return <As className={styles.root}>{renderArticles}</As>;
};
