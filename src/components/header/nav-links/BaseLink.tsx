import Link from "next/link";
import React from "react";
import { Button } from "@mui/material";
import styles from "./NavLink.module.css";

export type BaseLinkData = {
	link: string;
	label: string;
	//what is the type for this?
	color?: string;
};

// Link and a button is making accessibility play up it's tabbing both the link AND button
export const BaseLink = ({ link, label, color = "inherit" }: BaseLinkData) => {
	return (
		<Link href={link}>
			<Button
				className={styles.link}
				color="inherit"
				sx={{ padding: "1rem 0", color }}
			>
				{label}
			</Button>
		</Link>
	);
};
