// https://www.bbc.co.uk/news/10628494
// http://feeds.bbci.co.uk/news/rss.xml
// Ask them what else there is once we have something?
//////////////////////////////////
// I think - all news urls have /news before them
const BASE_URL = "http://feeds.bbci.co.uk/news";
const TOP_STORIES = "";
const WORLD = "/world";
const UK = "/uk";
const POSTFIX = "/rss.xml";
const BBC_NEWS_TOP_STORIES = (queryParams: any) => {
	return {
		url: `${BASE_URL}${TOP_STORIES}${POSTFIX}`,
		headers: {},
		queryParams,
	};
};

const BBC_NEWS_WORLD = (queryParams: any) => {
	return {
		url: `${BASE_URL}${WORLD}${POSTFIX}`,
		headers: {},
		queryParams,
	};
};

const BBC_NEWS_UK = (queryParams: any) => {
	return {
		url: `${BASE_URL}${UK}${POSTFIX}`,
		headers: {},
		queryParams,
	};
};
//////////////////////////////////////
// BBC needs it's own conversion
// We need to store shapes
// Kinda need a way to flag that we are missing data
// Assume with this type of data we need to grab meta from html
//////////////////////////////////////////////////////
// Could a type of image / avatar do that? / yes but how should
// given a src grab the data
//////////////////////////////////////////////
// html meta - for google - hitch a damn ride
//////////////////////////////////////////////
// <meta data-rh="true" property="og:description" content="Ian Owen ploughed into a queue of stationary cars, killing Marc Winston Roberts instantly.">
// <meta data-rh="true" property="og:image" content="https://ichef.bbci.co.uk/news/1024/branded_news/9874/production/_131082093_owen.jpg">
// <meta data-rh="true" property="og:image:alt" content="Ian Owen outside court">
// <meta data-rh="true" property="og:locale" content="en_GB">
// <meta data-rh="true" property="og:site_name" content="BBC News">
// <meta data-rh="true" property="og:title" content="Britannia Bridge fatal crash driver given suspended sentence">
// <meta data-rh="true" property="og:type" content="article">
// <meta data-rh="true" property="og:url" content="https://www.bbc.com/news/uk-wales-66801614">
//////////////////////////////////////
// Mother Fucker do it on if no image - geez
// If no image - load backup - hell should we be loading the html meta by default?
// By default means we can quite possibly get backup data - alt image text etc
///////////////////////////////////////////////
// data: {
// 	title: 'Britannia Bridge fatal crash driver given suspended sentence',
// 	link: 'https://www.bbc.co.uk/news/uk-wales-66801614?at_medium=RSS&at_campaign=KARANGA',
// 	pubDate: 'Wed, 13 Sep 2023 17:02:22 GMT',
// 	content: 'Ian Owen ploughed into a queue of stationary cars, killing Marc Winston Roberts instantly.',
// 	contentSnippet: 'Ian Owen ploughed into a queue of stationary cars, killing Marc Winston Roberts instantly.',
// 	guid: 'https://www.bbc.co.uk/news/uk-wales-66801614',
// 	isoDate: '2023-09-13T17:02:22.000Z'
// }
export const BBC_CREATORS = [
	["bbc_top_stories", BBC_NEWS_TOP_STORIES],
	["bbc_news_world", BBC_NEWS_WORLD],
	["bbc_news_uk", BBC_NEWS_UK],
];
