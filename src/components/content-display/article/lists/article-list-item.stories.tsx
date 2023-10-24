import { ArticleListItem } from "./article-list-item";
import { Article1 } from "./article-list.mock.data";

export default {
	title: "Components/ArticleList/ArticleListItem",
	component: ArticleListItem,
};

export const ArticleListItemComponent = () => (
	<ArticleListItem
		item={Article1}
		useAvatar={true}
		showDescription={true}
		showPublished={true}
		showAuthor={false}
		showPublisher={false}
	/>
);
