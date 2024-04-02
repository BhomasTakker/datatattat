import { Article1 } from "../mock/Articles.mock";
import { ArticleCardProps } from "./article-card";

export const articleCardMock: ArticleCardProps = {
	item: Article1,
	// titleVariant: "Primary",
	// titleMaxLines: 1,

	showDescription: true,
	// descriptionVariant: "Primary",
	// descriptionMaxLines: 3,

	// showAuthors: true,
	// showCategories: true,
	// showPublished: true,
	// showpublishers: true,
};

export const ArticleCardMock = {
	props: articleCardMock,
};
