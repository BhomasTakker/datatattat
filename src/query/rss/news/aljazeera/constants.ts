const BASE_URL = "https://www.aljazeera.com/xml/rss/all.xml";

// pass in more than params?
export const ALJAZEERA_NEWS_RSS_CREATOR = (queryParams: any) => {
	console.log("ALJAZEERA_NEWS_RSS_CREATOR");
	return {
		url: `${BASE_URL}`,
		headers: {},
		returns: (data: any) => data, // <- this needs a big work
		queryParams,
	};
};
