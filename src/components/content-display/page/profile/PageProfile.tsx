import { useCssClasses } from "../../new-article/hooks/useCssClasses";
import styles from "./PageProfile.module.scss";

interface Profile {
	pageTitle?: string;
	pageTitleVariant?: string; //union
	showPageTitle?: boolean;
	align?: "left" | "center" | "right";
}

interface PageProfile {
	profile: Profile;
}

export const PageProfile = ({ profile }: PageProfile) => {
	const { pageTitle, showPageTitle, align = "left" } = profile || {};
	const root = useCssClasses(styles.root, styles[align]);

	return (
		// Same component and styles (almost) as component
		<div className={root}>
			{showPageTitle && pageTitle && (
				<h1 className={styles.title}>{pageTitle}</h1>
			)}
		</div>
	);
};
