import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { RssQuerySelect } from "../rss-query/RssQuerySelectComponent";
import { QueryEditProps } from "../types";

export const withRss = (Component: typeof RssQuerySelect) => {
	return function WithRss({ objectKey }: BaseEditProps) {
		return (
			<Component
				objectKey={objectKey}
				name="rssFeed"
				title="RSS Feed"
				titleInfo="RSSFeedInfo"
				inputInfo="RSSProvider"
				inputLabel="Select Provider "
			/>
		);
	};
};
