import Link from "next/link";
import React from "react";
import { Button } from "@mui/material";
import styles from "./NavLink.module.css";

export type BaseLinkData = {
	link: string;
	label: string;
};

export const BaseLink = ({ link, label }: BaseLinkData) => {
	return (
		<Link href={link}>
			<Button className={styles.link} color="inherit">
				{label}
			</Button>
		</Link>
	);
};
