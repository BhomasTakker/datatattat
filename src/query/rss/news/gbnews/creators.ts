import { returnBasicCreator } from "../../utils/creators";

const BASE_URL = "https://www.gbnews.com/feeds/";
const POSTFIX = ".rss";
const US = `${BASE_URL}us${POSTFIX}`;
const ROYAL = `${BASE_URL}royal${POSTFIX}`;
const MONEY = `${BASE_URL}money${POSTFIX}`;
const OPINION = `${BASE_URL}opinion${POSTFIX}`;
const SPORT = `${BASE_URL}sport${POSTFIX}`;
const CELEBRITY = `${BASE_URL}celebrity${POSTFIX}`;
const PRESENTERS = `${BASE_URL}presenters${POSTFIX}`;
const NEWS_TOP = `${BASE_URL}news${POSTFIX}`;
const UK_NEWS = `${BASE_URL}news/uk${POSTFIX}`;
const US_NEWS = `${BASE_URL}news/us${POSTFIX}`;
const WORLD_NEWS = `${BASE_URL}news/world${POSTFIX}`;
const WEATHER = `${BASE_URL}weather${POSTFIX}`;
const MIGRANT_CRISIS = `${BASE_URL}news/uk/migrant-crisis${POSTFIX}`;
const CANCEL_CULTURE = `${BASE_URL}news/cancel-culture${POSTFIX}`;
const BREXIT = `${BASE_URL}news/uk/brexit${POSTFIX}`;
const CRIME = `${BASE_URL}news/crime${POSTFIX}`;
const POLITICS_TOP = `${BASE_URL}politics${POSTFIX}`;
const UK_POLITICS = `${BASE_URL}politics/uk${POSTFIX}`;
const US_POLITICS = `${BASE_URL}politics/us${POSTFIX}`;
const RISHI_SUNAK = `${BASE_URL}politics/uk/rishi-sunak${POSTFIX}`;
const KEIR_STARMER = `${BASE_URL}politics/uk/keir-starmer${POSTFIX}`;
const CONSERVATIVE = `${BASE_URL}politics/uk/conservative${POSTFIX}`;
const LABOUR = `${BASE_URL}politics/uk/labour${POSTFIX}`;
const SNP = `${BASE_URL}politics/uk/snp${POSTFIX}`;

export const GBNEWS_CREATORS = [
	["gbnews_us", returnBasicCreator(US)],
	["gbnews_royals", returnBasicCreator(ROYAL)],
	["gbnews_money", returnBasicCreator(MONEY)],
	["gbnews_opinion", returnBasicCreator(OPINION)],
	["gbnews_sport", returnBasicCreator(SPORT)],
	["gbnews_celebrity", returnBasicCreator(CELEBRITY)],
	["gbnews_presenters", returnBasicCreator(PRESENTERS)],
	["gbnews_news_top_stories", returnBasicCreator(NEWS_TOP)],
	["gbnews_uk_news_stories", returnBasicCreator(UK_NEWS)],
	["gbnews_us_news_stories", returnBasicCreator(US_NEWS)],
	["gbnews_world_news_stories", returnBasicCreator(WORLD_NEWS)],
	["gbnews_weather_stories", returnBasicCreator(WEATHER)],
	["gbnews_migrant_crisis_stories", returnBasicCreator(MIGRANT_CRISIS)],
	["gbnews_cancel_culture_stories", returnBasicCreator(CANCEL_CULTURE)],
	["gbnews_brexit_stories", returnBasicCreator(BREXIT)],
	["gbnews_crime_stories", returnBasicCreator(CRIME)],
	["gbnews_politics_top_endpoint", returnBasicCreator(POLITICS_TOP)],
	["gbnews_politics_uk_endpoint", returnBasicCreator(UK_POLITICS)],
	["gbnews_politics_us_endpoint", returnBasicCreator(US_POLITICS)],
	["gbnews_rishi_sunak_endpoint", returnBasicCreator(RISHI_SUNAK)],
	["gbnews_keir_starmer_endpoint", returnBasicCreator(KEIR_STARMER)],
	["gbnews_conservative_endpoint", returnBasicCreator(CONSERVATIVE)],
	["gbnews_labour_endpoint", returnBasicCreator(LABOUR)],
	["gbnews_snp_endpoint", returnBasicCreator(SNP)],
];
