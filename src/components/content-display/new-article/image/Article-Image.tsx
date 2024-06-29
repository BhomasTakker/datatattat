import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleType, Size, Style } from "../types";
import styles from "./Article-Image.module.scss";

type Aspect = "16/9";

interface ArticleImage {
	image: string;
	imageAlt: string;
	classes?: string; // better type?
	style?: Style;
	type?: ArticleType;
	size?: Size;
	aspect?: Aspect;
}

export const ArticleImage = ({
	image,
	imageAlt,
	type = "display",
	style = "display",
	size = "md",
	classes = "",
	aspect = "16/9",
}: // take in effect - i.e. greyscale
ArticleImage) => {
	// would using
	const root = useCssClasses(
		styles.root,
		styles[type],
		styles[style],
		styles[size],
		classes
	);

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={image} alt={imageAlt} className={root} data-aspect={aspect} />
	);
};
