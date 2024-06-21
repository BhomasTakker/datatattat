import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleType, Size, Style } from "../types";
import styles from "./ArticleTitle.module.scss";

interface ArticleTitle {
	title: string;
	classes?: string; // better type?
	as?: "h1" | "h2" | "h3" | "h4" | "h5";
	style?: Style;
	type?: ArticleType;
	size?: Size;
}

export const ArticleTitle = ({
	title,
	classes = "",
	as = "h2",
	type = "display",
	style = "display",
	size = "md",
}: ArticleTitle) => {
	const root = useCssClasses(
		styles.root,
		styles[type],
		styles[style],
		styles[size],
		classes
	);
	const As = as;
	return (
		<div className={root}>
			<As className={styles.title}>{title}</As>
		</div>
	);
};
