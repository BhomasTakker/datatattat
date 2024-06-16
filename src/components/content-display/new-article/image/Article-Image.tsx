import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleType, Size, Style } from "../types";
import { addCssClass, addCssClasses } from "../utils";
import styles from "./Article-Image.module.scss";

interface ArticleImage {
	image: string;
	imageAlt: string;
	classes?: string; // better type?
	style?: Style;
	type?: ArticleType;
	size?: Size;
}

export const ArticleImage = ({
	image,
	imageAlt,
	type = "display",
	style = "display",
	size = "md",
	classes = "",
}: ArticleImage) => {
	const root = useCssClasses(
		styles.root,
		styles[type],
		styles[style],
		styles[size],
		classes
	);

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={image} alt={imageAlt} className={root} />
	);
};
