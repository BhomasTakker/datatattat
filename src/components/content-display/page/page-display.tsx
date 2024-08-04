import { DTAHead } from "@/src/head/DTAHead";
import styles from "@/styles/Home.module.css";
import { PageContainerFactoryComponent } from "../page-containers/page-container.factory";
import { useContext } from "react";
import { PageDisplayContext } from "./context/page-display.context";
import { PageHead } from "./head/PageHead";
import { PageProfile } from "./profile/PageProfile";

// redoing this to use redux for page data would remove a lot of guff
// Then can implement a little data management for specific areas
export const PageDisplay = () => {
	const { content, meta, profile, ...andTheRest } =
		useContext(PageDisplayContext);

	return (
		<div>
			<DTAHead />
			{/* Remove styling - or some of it */}
			<main>
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
