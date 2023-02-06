//Not comprehensive and not accurate
//need properly going over with all sub types, enums, created, etc

/* https://learn.microsoft.com/en-us/rest/api/cognitiveservices-bingsearch/bing-news-api-v7-reference#news-categories-by-market etc */
export type BingNewsSearchType = {
	q: string;
	freshness?: "Day" | "Week" | "Month";
	mkt?: string;
	cc?: string;
	// category:
	count?: number;
	offset?: number;
	setLang?: string;
	since?: number;
	sortBy?: string;
};

export type BingNewsSearchResponse = {
	_type: string;
	id: string;
	readLink: string;
	relatedTopics: any[];
	sort: any[];
	totalEstimatedMatches: number;
	value: BingNewsArticle[];
};

//https://learn.microsoft.com/en-us/rest/api/cognitiveservices-bingsearch/bing-news-api-v7-reference
export type BingNewsArticle = {
	category: string;
	clusteredArticles: BingNewsArticle[];
	contractualRules: any;
	datePublished: string;
	description: string;
	headline: string;
	id: string;
	image: {
		thumbnail: {
			contentUrl: string;
		};
	};
	mentions: { name: string }[];
	name: string;
	provider: { name: string }[];
	url: string;
	video: { name: string; thumbnail: { height: number; width: number } };
};
