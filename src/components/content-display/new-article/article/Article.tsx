import { ContentContainer } from "../container/ContentContainer";
import { ArticleDescription } from "../description/ArticleDescription";
import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleImage } from "../image/Article-Image";
import { ArticleMetaData } from "../metadata/ArticleMetaData";
import { ArticleTitle } from "../title/ArticleTitle";
import { ClassName } from "../types";
import { Display as DisplayType, Card, ListItem } from "../types/display-types";
import styles from "./Article.module.scss";

import { useRouter } from "next/navigation";

////////////////////////////////////////////////////
// Rename me / Display is one instantiation
// We could also pass extra information here
// Published date or time ago
// Author, collection, etc
// We need interaction for users - save, fav, like, etc
export const Article = (props: DisplayType | Card | ListItem) => {
	const router = useRouter();
	const {
		meta,
		size = "md",
		// should be type / style is style of display etc
		type = "display",
		showDescription = true,
		showDetails = false,
		showPublished = false,
		showAuthors = false,
		showCategories = false,
		showPublishers = false,
		detailsProps = {},
		showImage = true,
		as = "article",
		style = "",
		styleSheet = {},
		classes = "",
		src,
		//
		variant,
		avatar: propsImage,
		details,
		guid,
		title: propsTitle,
		description: propsDescription,
	} = props;

	const {
		image: metaImage,
		title: metaTitle,
		description: metaDescription,
		imageAlt: metaImageAlt,
	} = meta;

	const title = metaTitle || propsTitle;
	const description = metaDescription || propsDescription;

	// incorrect - could become disjointed
	// if meta use meta for both vice versa
	const image = metaImage || propsImage?.src;
	const imageAlt = metaImageAlt || propsImage?.alt || "";

	const { docs, categories, authors, published, publishers, modified } =
		details || {};

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
		styleSheet?.root,
		styleSheet[type],
		styleSheet[style],
		styleSheet[size],

		classes,

		...typeClasses
	);
	const displayContainerClasses = useCssClasses(
		styles.displayContainer,
		styleSheet?.displayContainer
	);
	// Example use / we definately should not be passing all classes to each sub class...
	const titleClasses = useCssClasses(
		styles.title,
		styleSheet?.title,
		...typeClasses
	);
	const descriptionClasses = useCssClasses(
		styles.description,
		styleSheet?.description,
		...typeClasses
	);
	const containerClasses = useCssClasses(
		styles.contentContainer,
		styleSheet?.contentContainer,
		...typeClasses
	);
	const imageClasses = useCssClasses(
		styles.articleImage,
		styleSheet?.articleImage,
		...typeClasses
	);

	// Just a handler we may have several
	const onClickHandler = () => {
		console.log("CLICKED!!!");
		router.push(src);
	};

	const As = as;

	return (
		// this should be an article component
		<As className={`${root}`} onClick={onClickHandler}>
			<div className={displayContainerClasses}>
				{showImage && image && (
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
					{/* show metadata, style */}
					{showDetails && details && (
						<ArticleMetaData
							docs={docs}
							categories={categories}
							authors={authors}
							published={published}
							publishers={publishers}
							modified={modified}
							showAuthors={showAuthors}
							showCategories={showCategories}
							showPublished={showPublished}
							showPublishers={showPublishers}
						/>
					)}
				</ContentContainer>
			</div>
		</As>
	);
};
