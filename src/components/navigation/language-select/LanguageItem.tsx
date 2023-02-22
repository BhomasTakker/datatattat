import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import styles from "./LanguageItem.module.css";
import React from "react";

export const LanguageItem = ({ data, onChange }: any) => {
	// console.log({ data });
	const Icon = data.icon;

	return (
		<MenuItem value={data.language} onClick={onChange}>
			<ListItemText>{data.language}</ListItemText>
			<ListItemIcon>
				<Icon className={styles.icon} />
			</ListItemIcon>
		</MenuItem>
	);
};
