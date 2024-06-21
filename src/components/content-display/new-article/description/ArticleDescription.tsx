import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleType, Size, Style } from "../types";
import styles from "./ArticleDescription.module.scss";

interface ArticleDescription {
	description: string;
	classes?: string;
	style?: Style;
	size?: Size;
	type?: ArticleType;
}

export const ArticleDescription = ({
	classes,
	description,
	style = "display",
	type = "display",
	size = "md",
}: ArticleDescription) => {
	const root = useCssClasses(
		styles.root,
		styles[type],
		styles[style],
		styles[size],
		classes
	);
	return (
		<div className={root}>
			<p className={`${styles.description}`}>{description}</p>
		</div>
	);
};
