import { Article1, Articles } from "../mock/Articles.mock";
import { ArticleStackProps } from "./article-stack";

const props: ArticleStackProps = {
	data: Articles,
	direction: "row",
	alignItems: "center",
	justifyContent: "center",
	spacing: 5,
	useFlexWrap: true,
	dividerVariant: "none",
};

export const ArticleStackMock = { props };
