import { ArticleStackProps } from "./article-stack";

export const defaults: Omit<ArticleStackProps, "data"> = {
	direction: "row",
	alignItems: "center",
	justifyContent: "center",
	spacing: 1,
	dividerVariant: "none",
};
