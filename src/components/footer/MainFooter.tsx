import React from "react";
import styles from "./MainFooter.module.scss";
import { Icons } from "./social-media-icons/icons";

const year = new Date(Date.now()).getFullYear();
const COPYRIGHT_NOTICE = `Copyright © ${year} Datatattat.`;
const COPYRIGHT_MESSAGE =
	"Datatattat is not responsible for the content of external sites.";
const EDITORIAL_GUIDELINES_TEXT =
	"Read about our approach to external linking.";
const EDITORIAL_GUIDELINES_LINK = "#";

//Split to component proper
const Copyright = () => {
	return (
		<p className={styles.copyright}>
			<strong>{COPYRIGHT_NOTICE} </strong>
			{COPYRIGHT_MESSAGE}
			{/* <Link href={EDITORIAL_GUIDELINES_LINK}>{EDITORIAL_GUIDELINES_TEXT}</Link> */}
		</p>
	);
};

export const MainFooter = ({}: any) => {
	return (
		<footer className={styles.root}>
			<div className={styles.container}>
				{/* Add sitemap links here */}
				{/* Add Social Media links here */}
				<Icons />
				<Copyright />
			</div>
		</footer>
	);
};
