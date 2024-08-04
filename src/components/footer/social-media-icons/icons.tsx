import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./icons.module.scss";
// we are missing logos
// We need a better supplier

import Link from "next/link";

// Really ought to pull these from db
// Or have them passed in
// But I would have to manually enter them in to the database so...
// Just add x amount we have - we should go for the main ones etc
export const Icons = () => {
	return (
		<div className={styles.root}>
			<Link href={"https://x.com/datatattat"}>
				<XIcon fontSize="large" />
			</Link>
			<Link href={"https://www.reddit.com/user/datatattat/"}>
				<RedditIcon fontSize="large" />
			</Link>
			{/* We absolutely need a youtube account */}
			<Link href={"https://x.com/datatattat"}>
				<YouTubeIcon fontSize="large" />
			</Link>
		</div>
	);
};
