// https://www.youtube.com/watch?v=Kx8XlKRBZx8
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { Children, PropsWithChildren, useState } from "react";
import { useCssClasses } from "../../hooks/useCssClasses";
import styles from "./ArticleCarousel.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

type ArticleCarousel = {
	articles: CollectionItem[];
	className: string;
	styleSheet: {
		readonly [key: string]: string;
	};
};

export const ArticleCarousel = ({
	articles,
	className,
	children,
	styleSheet,
}: PropsWithChildren<ArticleCarousel>) => {
	const [articleIndex, setArticleIndex] = useState(0);
	const classes = useCssClasses(styles.root, styleSheet.root, className);
	const prevBtnClasses = useCssClasses(
		styles.button,
		styles.prev,
		styleSheet.button,
		styleSheet.prev
	);
	const nextBtnClasses = useCssClasses(
		styles.button,
		styles.next,
		styleSheet.button,
		styleSheet.next
	);
	const containerClasses = useCssClasses(
		styles.container,
		styleSheet.container
	);
	const navigationClasses = useCssClasses(
		styles.navigation,
		styleSheet.navigation
	);
	const navigationBtnClasses = useCssClasses(
		styles.navigationBtn,
		styleSheet.navigationBtn
	);
	const childArray = Children.toArray(children);

	if (!articles) return null;
	if (!children) return null;

	const showNextHandler = () => {
		setArticleIndex((index) => {
			if (index === childArray.length - 1) return 0;
			return index + 1;
		});
	};
	const showPrevHandler = () => {
		setArticleIndex((index) => {
			if (index === 0) return childArray.length - 1;
			return index - 1;
		});
	};

	return (
		<section aria-label="Article carousel" className={classes}>
			<div className={containerClasses}>
				{childArray.map((child, index) => (
					<div
						key={index}
						style={{ translate: `${-100 * articleIndex}%` }}
						aria-hidden={index !== articleIndex}
					>
						{child}
					</div>
				))}
			</div>
			<button
				className={prevBtnClasses}
				onClick={showPrevHandler}
				aria-label="View previous article"
			>
				<ArrowBackIosIcon aria-hidden />
			</button>
			<button
				className={nextBtnClasses}
				onClick={showNextHandler}
				aria-label="View next article"
			>
				<ArrowForwardIosIcon aria-hidden />
			</button>
			<div className={navigationClasses}>
				{childArray.map((_, index) => (
					<button
						key={index}
						className={navigationBtnClasses}
						onClick={() => setArticleIndex(index)}
						aria-label={`View article ${index + 1}`}
					>
						{index === articleIndex ? (
							<RadioButtonCheckedIcon aria-hidden />
						) : (
							<RadioButtonUncheckedIcon aria-hidden />
						)}
					</button>
				))}
			</div>
		</section>
	);
};
