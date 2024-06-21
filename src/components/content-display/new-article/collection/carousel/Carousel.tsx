import { PropsWithChildren } from "react";
import styles from "./Carousel.module.scss";

type ArticleCarousel = {};

export const ArticleCarousel = ({
	children,
}: PropsWithChildren<ArticleCarousel>) => {
	return <div className={styles.root}>{children}</div>;
};
