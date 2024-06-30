import React from "react";
import { Box, Container } from "@mui/material";
import styles from "./MainFooter.module.scss";
import Link from "next/link";
import { BaseLink } from "../header/nav-links/BaseLink";

//if you followed a convention
const { footer, content } = styles;

const year = new Date(Date.now()).getFullYear();
//config - need a config plan
const COPYRIGHT_NOTICE = `Copyright © ${year} Datatattat.`;
const COPYRIGHT_MESSAGE =
	"Datatattat is not responsible for the content of external sites.";
const EDITORIAL_GUIDELINES_TEXT =
	"Read about our approach to external linking.";
const EDITORIAL_GUIDELINES_LINK = "#";

//Split to component proper
const Copyright = () => {
	return (
		<p>
			<strong>{COPYRIGHT_NOTICE} </strong>
			{COPYRIGHT_MESSAGE}
			{/* Pass in styles */}
			<BaseLink
				link={EDITORIAL_GUIDELINES_LINK}
				label={EDITORIAL_GUIDELINES_TEXT}
			></BaseLink>
		</p>
	);
};

//remove dynamic footer stuff?
//For now we should
export const MainFooter = ({ footerData }: any) => {
	// // console.log({ footerData });
	return (
		<footer className={styles.root}>
			<Box className={footer} bgcolor={"primary.main"}>
				{/* in header content etc we have a double container or margin added ... */}
				<Container>
					<Container className={content}>
						<Copyright />
					</Container>
				</Container>
			</Box>
		</footer>
	);
};
