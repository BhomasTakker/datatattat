import { Button, rgbToHex, Tab, useTheme } from "@mui/material";
import Link from "next/link";
import styles from "./TabLink.module.css";

export const TabLink = ({
	href,
	label,
	over = () => {},
	out = () => {},
}: {
	href: string;
	label: string;
	over?: () => void;
	out?: () => void;
}) => {
	const theme = useTheme();

	console.log({ theme });
	//we need to underline like selected on hover
	return (
		<Link href={href}>
			<Tab
				className={styles.link}
				// component={Button}
				// sx={{ color: "rgba(256,256,256,1)" }}
				label={label}
				onMouseOver={over}
				onMouseOut={out}
			/>
		</Link>
	);
};
