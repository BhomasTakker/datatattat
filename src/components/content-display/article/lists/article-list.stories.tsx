import { ArticleList } from "./article-list";
import { Articles } from "./article-list.mock.data";

export default {
	title: "Components/ArticleList",
	component: ArticleList,
};

export const ArticleListComponent = () => (
	<ArticleList
		data={Articles}
		title={"Article List Title"}
		description={"Article List Title - Lorem Ipsum "}
		useAvatar={true}
		showDescription={true}
		showPublished={true}
		showAuthor={false}
		showPublisher={false}
	/>
);
