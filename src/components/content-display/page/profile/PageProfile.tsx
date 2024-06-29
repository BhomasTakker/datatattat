import styles from "./PageProfile.module.scss";

interface Profile {
	pageTitle?: string;
	pageTitleVariant?: string; //union
	showPageTitle?: boolean;

	pageDescription?: string;
	pageDescriptionVariant?: string; //union
	showPageDescription?: boolean;
}

interface PageProfile {
	profile: Profile;
}

export const PageProfile = ({ profile }: PageProfile) => {
	const { pageTitle, showPageTitle, pageDescription, showPageDescription } =
		profile;
	return (
		<div className={styles.root}>
			{showPageTitle && pageTitle && (
				<h1 className={styles.title}>{pageTitle}</h1>
			)}
			{showPageDescription && pageDescription && (
				<p className={styles.description}>{pageDescription}</p>
			)}
		</div>
	);
};
