const BASE_URL = "https://feeds.skynews.com/feeds/rss/";
const POSTFIX = ".xml";

// pass in more than params
export const SKY_NEWS_RSS_CREATOR = (queryParams: any) => {
	const { endpoint } = queryParams;
	delete queryParams.endpoint; // not okay make a copy

	return {
		url: `${BASE_URL}${endpoint}${POSTFIX}`,
		headers: {},
		returns: (data: any) => data, // <- this needs a big work
		queryParams,
	};
};
