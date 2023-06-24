import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { RssQuerySelect } from "../rss-query/RssQuerySelectComponent";
import { QueryEditProps } from "../types";

// It would always be Query?
// Variations perhaps

// In fairness this may be an unneccessary step too far
// Just load the thing directly
// This level of abstraction is possibly way more complicated
// and potentially not required
export const withRss = (Component: typeof RssQuerySelect) => {
	return function WithRss({ objectKey }: BaseEditProps) {
		return (
			<Component
				objectKey={objectKey}
				name="rssFeed"
				title="RSS Feed"
				titleInfo="RSSFeedInfo"
				inputInfo="RSSProvider"
				inputLabel="Select Provider"
			/>
		);
	};
};
