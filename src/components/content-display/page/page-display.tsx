import { DTAHead } from "@/src/head/DTAHead";
import styles from "@/styles/Home.module.css";
import { PageContainerFactoryComponent } from "../page-containers/page-container.factory";
import { useContext } from "react";
import { PageDisplayContext } from "./context/page-display.context";
import { PageHead } from "./head/PageHead";
import { PageProfile } from "./profile/PageProfile";

export const PageDisplay = () => {
	const { content, meta, profile, ...andTheRest } =
		useContext(PageDisplayContext);

	return (
		<div>
			<DTAHead />
			{/* Remove styling - or some of it */}
			<main className={styles.main}>
				{/* Remove title from here */}
				{/* <h1>Page Display - set this from somewhere</h1> */}
				<PageHead headData={meta} />
				<PageProfile profile={profile} />
				{/* Page Title Here */}
				<PageContainerFactoryComponent contentData={content} />
				{/* <Container data={content} /> */}
			</main>
		</div>
	);
};
