import { DTAHead } from "@/src/head/DTAHead";
import { Box } from "@mui/material";
import styles from "@/styles/Home.module.css";
import { PageContainerFactoryComponent } from "../page-containers/page-container.factory";
import { useContext } from "react";
import { PageDisplayContext } from "./context/page-display.context";
import { PageHead } from "./head/PageHead";
// {t(Common.pageTitle)}

export const PageDisplay = () => {
	const { content, meta } = useContext(PageDisplayContext);
	return (
		<Box>
			<DTAHead />
			{/* Remove styling - or some of it */}
			<main className={styles.main}>
				{/* Remove title from here */}
				{/* <h1>Page Display - set this from somewhere</h1> */}
				<PageHead headData={meta} />
				{/* Add PageMeta and PageProfile components here - taking meta and profile data from PageDisplayContext*/}

				<PageContainerFactoryComponent contentData={content} />
				{/* <Container data={content} /> */}
			</main>
		</Box>
	);
};
