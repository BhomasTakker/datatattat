import { Details } from "@/src/types/data-structures/base";
import { useCssClasses } from "../hooks/useCssClasses";
import styles from "./ArticleMetadata.module.scss";
import { Time } from "./time/Time";

export interface ArticleMetaData extends Details {
	showAuthors?: boolean;
	showCategories?: boolean;
	showPublished?: boolean;
	showPublishers?: boolean;
}

// style
export const ArticleMetaData = ({
	docs,
	categories,
	authors,
	published,
	publishers,
	modified,
	showAuthors = false,
	showCategories = false,
	showPublished = false,
	showPublishers = false,
}: ArticleMetaData) => {
	// A bit cheap - we should perhaps have if more than one then split else user set
	const num = +showAuthors + +showCategories + +showPublished + +showPublishers;
	const root = useCssClasses(styles.root, num === 1 ? styles.end : "");
	// if no values then return null

	// We need a better check / check actual content
	if (!num) {
		return null;
	}

	return (
		<div className={root}>
			{showAuthors && authors && <p>{authors?.join(" ")}</p>}
			{showCategories && categories && <p>{categories?.join(" ")}</p>}
			{showPublishers && publishers && <p>{publishers?.join(" ")}</p>}
			{showPublished && published && (
				<Time time={published} variant="age" prefix="" postfix=" ago" />
			)}
		</div>
	);
};
