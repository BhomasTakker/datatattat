import { UnknownObject } from "@/src/types";
import { ArticleComponent, RenderObjectReturn } from "../../../types";
import { addCssClasses } from "../../../utils";
import styles from "./youtube.module.scss";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import { DisplayPlayer } from "@/src/components/content-display/media-player/display/DisplayPlayer";
import {
	DisplayInteraction,
	InteractionTypes,
} from "../../../types/_interaction";

// How would we specify to use a different card
// When certain sizes without using screen width?
// Screen width is a problem when resizing
// Should we expect people to resize?
// Also, my God, put these config objects somewhere
const card = {
	// type: "card",
	// style: "",
	// media: "video",
	showDetails: true,
	showPublished: true,
	showAuthors: true,
	showCategories: true,
	showPublishers: true,
	// we need to be able to add classes
	showDescription: true,
	showImage: true,
	size: "md",
	styleSheet: {},
	classes: "",

	// play to play self
	// interaction: "display",
	interaction: InteractionTypes.DISPLAY,
	as: "article",
	direction: "l2r",
};

const renderStack =
	(args: UnknownObject, id: string) => (articles: CollectionItem[]) => {
		// if no articles
		// Create a display component / initialise to first article
		const article1 = articles[0];
		const display = <DisplayPlayer url={article1.src} id={id} />;
		// Create the article stack
		// const stackDiv = <div></div>;
		// Create articles and add to stackDiv
		// Return the two components with css
		const articlesComponents = articles.map(
			(
				{ src, variant, avatar, details, description, guid, title, ...rest },
				index
			) => {
				// @ts-ignore
				const containerProps: Omit<ArticleComponent, "meta"> &
					DisplayInteraction = {
					type: "card",
					style: "",
					media: "video",
					src,
					variant,
					avatar,
					description,
					details,
					guid,
					title,
					...card,
					displayId: id,
					...rest,
					// jeez / what were we doing?
					...args,
				};
				return (
					// eslint-disable-next-line react/jsx-no-undef
					<ArticleContainer key={src} src={src} props={containerProps} />
				);
			}
		);

		const stackDiv = <div className={styles.items}>{articlesComponents}</div>;

		return [display, stackDiv];
	};

type VariantObject = {};

type Props = {
	variantObject: VariantObject;
};

// We have everything - but we can type what we need?
type CollectionProps = {
	displayId: string;
};

// The sollution here is to pass props into these functions
export const getYouTubeRenderObject = (
	props: Props,
	collectionProps: CollectionProps
): RenderObjectReturn<"div"> => {
	const { variantObject, ...rest } = props;
	// rest contains query data etc.
	// seems to be a mistake getting, taking, using, here
	const {} = variantObject || {};
	const { displayId } = collectionProps;

	return {
		renderList: renderStack(rest, displayId),
		styles: addCssClasses(styles.root),
		styleSheet: null,
		as: "div",
	};
};