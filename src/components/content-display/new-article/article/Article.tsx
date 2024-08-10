import { UnknownObject } from "@/src/types";
import { ContentContainer } from "../container/ContentContainer";
import { ArticleDescription } from "../description/ArticleDescription";
import { routeHandler } from "../handlers/router";
import { WithHandler } from "../handlers/WithHandler";
import { useCssClasses } from "../hooks/useCssClasses";
import { ArticleImage } from "../image/Article-Image";
import { ArticleMetaData } from "../metadata/ArticleMetaData";
import { ArticleTitle } from "../title/ArticleTitle";
import { ArticleType, ClassName, Size, Style } from "../types";
import {
	Display as DisplayType,
	Card,
	ListItem,
	ArticleProps,
} from "../types/display-types";
import styles from "./Article.module.scss";
import { ArticleMediaPlayer } from "../media-player/Article-media-player";
import { ArticleContextProvider } from "../context/article.context";
import { ContentType } from "../types/_contentType";

interface ArticleMedia {
	image?: string;
	imageAlt: string;
	classes: string;
	style: Style;
	type: ArticleType;
	size: Size;
	src: string;
	useMedia: boolean;
	contentType: ContentType;
}

const ArticleMedia = ({
	image,
	imageAlt,
	classes,
	style,
	type,
	size,
	src,
	useMedia,
	contentType,
}: ArticleMedia) => {
	const isMedia = contentType === "video" || contentType === "audio";

	if (isMedia && useMedia && src) {
		return <ArticleMediaPlayer src={src} />;
	}
	return (
		<>
			{image && (
				<ArticleImage
					image={image}
					imageAlt={imageAlt}
					classes={classes}
					style={style}
					type={type}
					size={size}
				/>
			)}
		</>
	);
};

// we need to go through props
// Add to / build
export const Article = (props: ArticleProps) => {
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

		contentType = "article",

		variant,
		avatar: propsImage,
		details,
		guid,
		title: propsTitle,
		description: propsDescription,
		// default to this for now
		interaction = "navigate",
		// not used
		media,

		mediaPlayer = false,
		...rest
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

	// there's probably a reducer here
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
		// these will addundefined...?
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

	const As = as;

	return (
		// this should be an article component
		<As className={`${root}`}>
			<ArticleContextProvider value={{ props }}>
				<WithHandler handlerProps={props}>
					<div className={displayContainerClasses}>
						{showImage && (
							<ArticleMedia
								contentType={contentType}
								image={image}
								imageAlt={imageAlt}
								classes={imageClasses}
								style={style}
								type={type}
								size={size}
								useMedia={mediaPlayer}
								src={src}
							/>
						)}
						<ContentContainer as="div" classes={containerClasses}>
							<div>
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
							</div>
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
				</WithHandler>
			</ArticleContextProvider>
		</As>
	);
};
