import Link from "next/link";
import styles from "./ComponentProfile.module.scss";
import { useCssClasses } from "../../new-article/hooks/useCssClasses";

export interface Profile {
	componentTitle?: string;
	componentTitleVariant?: string; //union
	showComponentTitle?: boolean;
	componentTitleLink?: string;
	align?: "left" | "center" | "right";

	style?: string;
}

interface ComponentProfile {
	profile: Profile;
}

export const ComponentProfile = ({ profile }: ComponentProfile) => {
	const {
		componentTitle,
		showComponentTitle,
		componentTitleLink,
		align = "left",
	} = profile || {};
	const root = useCssClasses(styles.root, styles[align]);

	const titleComponent = <h2 className={styles.title}>{componentTitle}</h2>;
	const titleComponentToRender = componentTitleLink ? (
		<Link href={componentTitleLink}>{titleComponent}</Link>
	) : (
		titleComponent
	);

	const showPageDetails = showComponentTitle;

	if (!showPageDetails) {
		return <></>;
	}

	return (
		<div className={root}>
			{showComponentTitle && componentTitle && titleComponentToRender}
		</div>
	);
};
