const BASE_URL = "https://www.gbnews.com/feeds";
const US = "/us";
const ROYAL = "/royal";
const MONEY = "/money";
const OPINION = "/opinion";
const SPORT = "/sport";
const CELEBRITY = "/celebrity";
const PRESENTERS = "/presenters";
const NEWS_TOP = "/news";
const UK_NEWS = "/news/uk";
const US_NEWS = "/news/us";
const WORLD_NEWS = "/news/world";
const WEATHER = "/weather";
const MIGRANT_CRISIS = "/news/uk/migrant-crisis";
const CANCEL_CULTURE = "/news/cancel-culture";
const BREXIT = "/news/uk/brexit";
const CRIME = "/news/crime";
const POLITICS_TOP = "/politics";
const UK_POLITICS = "/politics/uk";
const US_POLITICS = "/politics/us";
const RISHI_SUNAK = "/politics/uk/rishi-sunak";
const KEIR_STARMER = "/politics/uk/keir-starmer";
const CONSERVATIVE = "/politics/uk/conservative";
const LABOUR = "/politics/uk/labour";
const SNP = "/politics/uk/snp";

const POSTFIX = ".rss";

const baseParams = {
	headers: {},
	returns: (data: any) => {}, // Remove
};

// There's a better way of doing this also
const returnCreator = (urlId: string) => (queryParams: any) => {
	return {
		url: `${BASE_URL}${urlId}${POSTFIX}`,
		...baseParams,
		queryParams,
	};
};

export const GBNEWS_CREATORS = [
	["gbnews_us", returnCreator(US)],
	["gbnews_royals", returnCreator(ROYAL)],
	["gbnews_money", returnCreator(MONEY)],
	["gbnews_opinion", returnCreator(OPINION)],
	["gbnews_sport", returnCreator(SPORT)],
	["gbnews_celebrity", returnCreator(CELEBRITY)],
	["gbnews_presenters", returnCreator(PRESENTERS)],
	["gbnews_news_top_stories", returnCreator(NEWS_TOP)],
	["gbnews_uk_news_stories", returnCreator(UK_NEWS)],
	["gbnews_us_news_stories", returnCreator(US_NEWS)],
	["gbnews_world_news_stories", returnCreator(WORLD_NEWS)],
	["gbnews_weather_stories", returnCreator(WEATHER)],
	["gbnews_migrant_crisis_stories", returnCreator(MIGRANT_CRISIS)],
	["gbnews_cancel_culture_stories", returnCreator(CANCEL_CULTURE)],
	["gbnews_brexit_stories", returnCreator(BREXIT)],
	["gbnews_crime_stories", returnCreator(CRIME)],
	["gbnews_politics_top_endpoint", returnCreator(POLITICS_TOP)],
	["gbnews_politics_uk_endpoint", returnCreator(UK_POLITICS)],
	["gbnews_politics_us_endpoint", returnCreator(US_POLITICS)],
	["gbnews_rishi_sunak_endpoint", returnCreator(RISHI_SUNAK)],
	["gbnews_keir_starmer_endpoint", returnCreator(KEIR_STARMER)],
	["gbnews_conservative_endpoint", returnCreator(CONSERVATIVE)],
	["gbnews_labour_endpoint", returnCreator(LABOUR)],
	["gbnews_snp_endpoint", returnCreator(SNP)],
];
