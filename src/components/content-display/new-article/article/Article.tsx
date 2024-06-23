import { ContentContainer } from "../container/ContentContainer";
import { ArticleDescription } from "../description/ArticleDescription";
import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleImage } from "../image/Article-Image";
import { ArticleTitle } from "../title/ArticleTitle";
import { ClassName } from "../types";
import { Display as DisplayType, Card, ListItem } from "../types/display-types";
import styles from "./Article.module.scss";

////////////////////////////////////////////////////
// Rename me / Display is one instantiation
// We could also pass extra information here
// Published date or time ago
// Author, collection, etc
// We need interaction for users - save, fav, like, etc
export const Article = (props: DisplayType | Card | ListItem) => {
	const {
		meta,
		size = "md",
		// should be type / style is style of display etc
		type = "display",
		showDescription = true,
		showImage = true,
		as = "div",
		style = "",
	} = props;
	const { image, title, description, imageAlt } = meta;

	// don't do this here and perhaps do something different but okay
	let typeClasses: ClassName[] = [];
	switch (type) {
		case "display":
			const { align, justify } = props as DisplayType;
			typeClasses = [styles[align], styles[justify]];
			break;
		case "card":
			const { direction } = props as Card;
			typeClasses = [styles[direction]];
			break;
		case "listItem":
			const {} = props as ListItem;
			typeClasses = [];
			break;
	}

	// Separate to a function to return the objects
	// I don't need to see this
	const root = useCssClasses(
		styles.root,
		styles[type],
		styles[style],
		styles[size],
		...typeClasses
	);
	// Example use
	const titleClasses = useCssClasses(
		styles.title,
		styles[type],
		styles[style],
		styles[size],
		...typeClasses
	);
	const descriptionClasses = useCssClasses(
		styles.description,
		styles[type],
		styles[style],
		styles[size],
		...typeClasses
	);
	const containerClasses = useCssClasses(
		styles.contentContainer,
		styles[type],
		styles[style],
		styles[size],
		...typeClasses
	);
	const imageClasses = useCssClasses(
		styles.articleImage,
		styles[type],
		styles[style],
		styles[size],
		...typeClasses
	);
	const As = as;

	return (
		// this needs to be a generic component so we can have a li
		// except in THAT instance you would be better off mapping children in ul
		// and wrapping each in a li
		<As className={`${root}`}>
			<div className={`${styles.displayContainer}`}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				{showImage && (
					<ArticleImage
						image={image}
						imageAlt={imageAlt}
						classes={imageClasses}
						style={style}
						type={type}
						size={size}
					/>
				)}
				<ContentContainer as="div" classes={containerClasses}>
					{title && (
						<ArticleTitle
							title={title}
							classes={titleClasses}
							style={style}
							type={type}
							size={size}
						/>
					)}
					{description && showDescription && (
						<ArticleDescription
							description={description}
							classes={descriptionClasses}
							style={style}
							type={type}
							size={size}
						/>
					)}
				</ContentContainer>
			</div>
		</As>
	);
};
