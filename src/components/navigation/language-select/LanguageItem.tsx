import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import styles from "./LanguageItem.module.css";
import React from "react";
//This needs removing - probably have a folder of language icons
import { US } from "country-flag-icons/react/3x2";
import { LanguageType } from "../../../types/locale";

export const LanguageItem = ({ data, onChange }: any) => {
	console.log({ data });
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
