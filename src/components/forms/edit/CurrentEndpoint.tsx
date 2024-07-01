import React, { useContext } from "react";
import { EditContext } from "@/src/context/edit-context";
import styles from "./CurrentEndpoint.module.scss";

export function CurrentEndpoint() {
	const { currentPage } = useContext(EditContext);

	return (
		<div className={styles.root}>
			<p className={styles.label}>Current Endpoint</p>
			<div className={styles.container}>
				<p className={styles.endpoint}>{currentPage}</p>
			</div>
		</div>
	);
}
