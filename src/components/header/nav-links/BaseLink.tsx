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

export const BaseLink = ({ link, label, color = "inherit" }: BaseLinkData) => {
	return (
		<Link href={link}>
			<Button className={styles.link} sx={{ color }}>
				{label}
			</Button>
		</Link>
	);
};
