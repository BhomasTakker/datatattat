import { DTAHead } from "@/src/head/DTAHead";
import { Box } from "@mui/material";
import styles from "@/styles/Home.module.css";
import { PageContainerFactoryComponent } from "../page-containers/page-container.factory";
import { useContext } from "react";
import { PageDisplayContext } from "./context/page-display.context";
// {t(Common.pageTitle)}

export const PageDisplay = () => {
	const { content } = useContext(PageDisplayContext);
	return (
		<Box>
			<DTAHead />
			{/* Remove styling - or some of it */}
			<main className={styles.main}>
				{/* Remove title from here */}
				<h1>Page Display - set this from somewhere</h1>
				<PageContainerFactoryComponent contentData={content} />
				{/* <Container data={content} /> */}
			</main>
		</Box>
	);
};
