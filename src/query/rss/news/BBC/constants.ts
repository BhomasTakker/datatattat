export const HEADLINES = "api/rss/bbc/news";

// This needs to be used to 'automatically' generate the BBC RSS form
// i.e. these are the available endpoints to add to the base url
// in rare cases i.e. google - you may have a search param
// in which case you can add a given user variable as part of the endpoint

export const BBC_NEWS_RSS_OBJECT = {
	url: `${HEADLINES}`,
	returns: (data: any) => data,
};
