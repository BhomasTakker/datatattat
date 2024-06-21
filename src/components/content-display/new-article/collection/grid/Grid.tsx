import { PropsWithChildren } from "react";
import styles from "./Grid.module.scss";

type ArticleGrid = {};

export const ArticleGrid = ({ children }: PropsWithChildren<ArticleGrid>) => {
	return <div className={styles.root}>{children}</div>;
};
