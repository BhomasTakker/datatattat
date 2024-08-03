import Link from "next/link";
import styles from "./ComponentProfile.module.scss";

export interface Profile {
	componentTitle?: string;
	componentTitleVariant?: string; //union
	showComponentTitle?: boolean;
	componentTitleLink?: string;

	style?: string;

	componentDescription?: string;
	componentDescriptionVariant?: string; //union
	showComponentDescription?: boolean;
}

interface ComponentProfile {
	profile: Profile;
}

export const ComponentProfile = ({ profile }: ComponentProfile) => {
	const {
		componentTitle,
		showComponentTitle,
		componentTitleLink,
		componentDescription,
		showComponentDescription,
	} = profile || {};

	// Sort this out / we need to offer titles
	// at least flesh it out a little
	const titleComponent = <h2 className={styles.title}>{componentTitle}</h2>;
	const titleComponentToRender = componentTitleLink ? (
		<Link href={componentTitleLink}>{titleComponent}</Link>
	) : (
		titleComponent
	);

	const showPageDetails = showComponentTitle || showComponentDescription;

	if (!showPageDetails) {
		return <></>;
	}

	return (
		<div className={styles.root}>
			{showComponentTitle && componentTitle && titleComponentToRender}
			{showComponentDescription && componentDescription && (
				<p className={styles.description}>{componentDescription}</p>
			)}
		</div>
	);
};
