// https://www.bbc.co.uk/news/10628494
// http://feeds.bbci.co.uk/news/rss.xml
// Ask them what else there is once we have something?
// sport is all there / down to league team pages...
//////////////////////////////////

import { returnBasicCreator } from "../../utils/creators";

// This needs to be automatic!!!!!!!!!!!!!!!!!
// for the majority id and url suffices
// id + url - option, what list, more

// I think - all news urls have /news before them
const BASE_URL = "http://feeds.bbci.co.uk/news";
const POSTFIX = "/rss.xml";

const TOP_STORIES = "";
const WORLD = "/world";
const UKRAINE_WAR = "/world-60525350";
const CLIMATE = "/science-environment-56837908";
const BUSINESS = "/business";
const POLITICS = "/politics";
const CULTURE = "/entertainment_and_arts";
const TECH = "/technology";
const SCIENCE = "/science_and_environment";
const HEALTH = "/health";
const FAMILY_EDUCATION = "/education";
const IN_PICTURES = "/in_pictures";
const NEWSBEAT = "/newsbeat";
const VERIFY = "/reality_check";
const DISABILITY = "/disability";
const ALBA = "/naidheachdan";
const CYMRU = "/cymrufyw";
const ISLE_OF_MAN = "/world/europe/isle_of_man";
const GUERNSEY = "/world/europe/guernsey";
const JERSEY = "/world/europe/jersey";
const ENGLAND = "/england";
const WALES = "/wales";
const WALES_POLITICS = "/wales/wales_politics";
const WALES_BUSINESS = "/topics/c52ew8q50z2t";
const WALES_NW = "/wales/north_west_wales";
const WALES_NE = "/wales/north_east_wales";
const WALES_MID = "/wales/mid_wales";
const WALES_SW = "/wales/south_west_wales";
const WALES_SE = "/wales/south_east_wales";
const NORTHERN_IRELAND = "/northern_ireland";
const NORTHERN_IRELAND_POLITICS = "/northern_ireland/northern_ireland_politics";
const SCOTLAND = "/scotland";
const SCOTLAND_POLITICS = "/scotland/scotland_politics";
const SCOTLAND_BUSINESS = "/scotland/scotland_business";
const SCOTLAND_EDINBURGH_FIFE_EAST = "/scotland/edinburgh_east_and_fife";
const SCOTLAND_GLASGOW_WEST = "/scotland/glasgow_and_west";
const SCOTLAND_HIGHLANDS_ISLANDS = "/scotland/highlands_and_islands";
const SCOTLAND_NE_ORKNEY_SHETLAND = "/scotland/north_east_orkney_and_shetland";
const SCOTLAND_SOUTH = "/scotland/south_scotland";
const SCOTLAND_TAYSIDE_CENTRAL = "/scotland/tayside_and_central";
const ENGLAND_CUMBRIA = "/england/cumbria";
const ENGLAND_LANCASHIRE = "/england/lancashire";
const ENGLAND_LIVERPOOL = "/england/merseyside";
const ENGLAND_MANCHESTER = "/england/manchester";
const ENGLAND_TEES = "/england/tees";
const ENGLAND_TYNE_WEAR = "/england/tyne_and_wear";
const ENGLAND_LEEDS_YORKSHIRE_WEST = "/england/leeds_and_west_yorkshire";
const ENGLAND_HUMBERSIDE = "/england/humberside";
const ENGLAND_LINCOLNSHIRE = "/england/lincolnshire";
const ENGLAND_SHEFFIELD_YORKSHIIRE_SOUTH = "/england/south_yorkshire";
const ENGLAND_YORK_YORKSHIRE_NORTH = "/england/york_and_north_yorkshire";
const ENGLAND_BIRMINGHAM_BLACK_COUNTRY =
	"/england/birmingham_and_black_country";
const ENGLAND_COVENTRY_WARWICKSHIRE = "/england/coventry_and_warwickshire";
const ENGLAND_HEREFORN_WORCESTER = "/england/hereford_and_worcester";
const ENGLAND_SHROPSHIRE = "/england/shropshire";
const ENGLAND_STOKE_STAFFORDSHIRE = "/england/stoke_and_staffordshire";
const ENGLAND_DERBY = "/england/derbyshire";
const ENGLAND_LEICESTER = "/england/leicester";
const ENGLAND_NORTHAMPTON = "/england/northamptonshire";
const ENGLAND_NOTTINGHAM = "/england/nottingham";
const ENGLAND_BRISTOL = "/england/bristol";
const ENGLAND_CORNWALL = "/england/cornwall";
const ENGLAND_DEVON = "/england/devon";
const ENGLAND_GLOUCESTERSHIRE = "/england/gloucestershire";
const ENGLAND_SOMERSET = "/england/somerset";
const ENGLAND_WILTSHIRE = "/england/wiltshire";
const ENGLAND_BEDS_HERTS_BUCKS = "/england/beds_bucks_and_herts";
const ENGLAND_CAMBRIDGESHIRE = "/england/cambridgeshire";
const ENGLAND_ESSEX = "/england/essex";
const ENGLAND_NORFOLK = "/england/norfolk";
const ENGLAND_SUFFOLK = "/england/suffolk";
const ENGLAND_BERKSHIRE = "/england/berkshire";
const ENGLAND_DORSET = "/england/dorset";
const ENGLAND_HAMPSHIRE_ISLEWIGHT = "/england/hampshire";
const ENGLAND_OXFORD = "/england/oxford";
const ENGLAND_KENT = "/england/kent";
const ENGLAND_LONDON = "/england/london";
const ENGLAND_SURREY = "/england/surrey";
const ENGLAND_SUSSEX = "/england/sussex";
const ENGLAND_ISLE_MAN = "/england/isle_of_man";

const UK = "/uk";

export const BBC_CREATORS = [
	[
		"bbc_top_stories",
		returnBasicCreator(`${BASE_URL}${TOP_STORIES}${POSTFIX}`),
	],
	[
		"bbc_news_world_headlines",
		returnBasicCreator(`${BASE_URL}${WORLD}${POSTFIX}`),
	],
	[
		"bbc_news_ukraine_war",
		returnBasicCreator(`${BASE_URL}${UKRAINE_WAR}${POSTFIX}`),
	],
	["bbc_news_climate", returnBasicCreator(`${BASE_URL}${CLIMATE}${POSTFIX}`)],

	["bbc_news_business", returnBasicCreator(`${BASE_URL}${BUSINESS}${POSTFIX}`)],
	["bbc_news_politics", returnBasicCreator(`${BASE_URL}${POLITICS}${POSTFIX}`)],
	["bbc_news_culture", returnBasicCreator(`${BASE_URL}${CULTURE}${POSTFIX}`)],
	["bbc_news_tech", returnBasicCreator(`${BASE_URL}${TECH}${POSTFIX}`)],
	["bbc_news_science", returnBasicCreator(`${BASE_URL}${SCIENCE}${POSTFIX}`)],
	["bbc_news_health", returnBasicCreator(`${BASE_URL}${HEALTH}${POSTFIX}`)],
	[
		"bbc_news_family_education",
		returnBasicCreator(`${BASE_URL}${FAMILY_EDUCATION}${POSTFIX}`),
	],
	[
		"bbc_news_in_pictures",
		returnBasicCreator(`${BASE_URL}${IN_PICTURES}${POSTFIX}`),
	],
	["bbc_news_newsbeat", returnBasicCreator(`${BASE_URL}${NEWSBEAT}${POSTFIX}`)],
	["bbc_news_verify", returnBasicCreator(`${BASE_URL}${VERIFY}${POSTFIX}`)],
	[
		"bbc_news_disability",
		returnBasicCreator(`${BASE_URL}${DISABILITY}${POSTFIX}`),
	],

	["bbc_news_uk_headlines", returnBasicCreator(`${BASE_URL}${UK}${POSTFIX}`)],
	["bbc_news_alba", returnBasicCreator(`${BASE_URL}${ALBA}${POSTFIX}`)],
	["bbc_news_cymru", returnBasicCreator(`${BASE_URL}${CYMRU}${POSTFIX}`)],
	[
		"bbc_news_isle_of_man",
		returnBasicCreator(`${BASE_URL}${ISLE_OF_MAN}${POSTFIX}`),
	],
	["bbc_news_guernsey", returnBasicCreator(`${BASE_URL}${GUERNSEY}${POSTFIX}`)],
	["bbc_news_jersey", returnBasicCreator(`${BASE_URL}${JERSEY}${POSTFIX}`)],

	[
		"bbc_news_england_headlines",
		returnBasicCreator(`${BASE_URL}${ENGLAND}${POSTFIX}`),
	],

	[
		"bbc_news_wales_headlines",
		returnBasicCreator(`${BASE_URL}${WALES}${POSTFIX}`),
	],
	[
		"bbc_news_wales_politics",
		returnBasicCreator(`${BASE_URL}${WALES_POLITICS}${POSTFIX}`),
	],
	[
		"bbc_news_wales_business",
		returnBasicCreator(`${BASE_URL}${WALES_BUSINESS}${POSTFIX}`),
	],
	[
		"bbc_news_wales_north_east",
		returnBasicCreator(`${BASE_URL}${WALES_NE}${POSTFIX}`),
	],
	[
		"bbc_news_wales_north_west",
		returnBasicCreator(`${BASE_URL}${WALES_NW}${POSTFIX}`),
	],
	[
		"bbc_news_wales_mid",
		returnBasicCreator(`${BASE_URL}${WALES_MID}${POSTFIX}`),
	],
	[
		"bbc_news_wales_south_east",
		returnBasicCreator(`${BASE_URL}${WALES_SE}${POSTFIX}`),
	],
	[
		"bbc_news_wales_south_west",
		returnBasicCreator(`${BASE_URL}${WALES_SW}${POSTFIX}`),
	],
	["bbc_news_wales_cymru", returnBasicCreator(`${BASE_URL}${CYMRU}${POSTFIX}`)],

	[
		"bbc_news_northern_ireland_headlines",
		returnBasicCreator(`${BASE_URL}${NORTHERN_IRELAND}${POSTFIX}`),
	],
	[
		"bbc_news_northern_ireland_politics",
		returnBasicCreator(`${BASE_URL}${NORTHERN_IRELAND_POLITICS}${POSTFIX}`),
	],

	[
		"bbc_news_scotland_headlines",
		returnBasicCreator(`${BASE_URL}${SCOTLAND}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_politics",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_POLITICS}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_business",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_BUSINESS}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_edinburgh_fife_east",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_EDINBURGH_FIFE_EAST}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_glasgow_and_west",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_GLASGOW_WEST}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_highlands_islands",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_HIGHLANDS_ISLANDS}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_ne_orkney_shetland",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_NE_ORKNEY_SHETLAND}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_south",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_SOUTH}${POSTFIX}`),
	],
	[
		"bbc_news_tayside_central",
		returnBasicCreator(`${BASE_URL}${SCOTLAND_TAYSIDE_CENTRAL}${POSTFIX}`),
	],
	[
		"bbc_news_scotland_alba",
		returnBasicCreator(`${BASE_URL}${ALBA}${POSTFIX}`),
	],

	// England, etc,
	[
		"bbc_news_Cumbria",
		returnBasicCreator(`${BASE_URL}${ENGLAND_CUMBRIA}${POSTFIX}`),
	],
	[
		"bbc_news_Lancashire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_LANCASHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Liverpool",
		returnBasicCreator(`${BASE_URL}${ENGLAND_LIVERPOOL}${POSTFIX}`),
	],
	[
		"bbc_news_Manchester",
		returnBasicCreator(`${BASE_URL}${ENGLAND_MANCHESTER}${POSTFIX}`),
	],
	["bbc_news_Tees", returnBasicCreator(`${BASE_URL}${ENGLAND_TEES}${POSTFIX}`)],
	[
		"bbc_news_tyne_wear",
		returnBasicCreator(`${BASE_URL}${ENGLAND_TYNE_WEAR}${POSTFIX}`),
	],
	[
		"bbc_news_Leeds_Yorkshire_west",
		returnBasicCreator(`${BASE_URL}${ENGLAND_LEEDS_YORKSHIRE_WEST}${POSTFIX}`),
	],
	[
		"bbc_news_humberside",
		returnBasicCreator(`${BASE_URL}${ENGLAND_HUMBERSIDE}${POSTFIX}`),
	],
	[
		"bbc_news_Lincolnshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_LINCOLNSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Sheffield_yorkshire_south",
		returnBasicCreator(
			`${ENGLAND_SHEFFIELD_YORKSHIIRE_SOUTH}${CYMRU}${POSTFIX}`
		),
	],
	[
		"bbc_news_York_yorkshire_north",
		returnBasicCreator(`${BASE_URL}${ENGLAND_YORK_YORKSHIRE_NORTH}${POSTFIX}`),
	],
	[
		"bbc_news_Birmingham_black_country",
		returnBasicCreator(
			`${BASE_URL}${ENGLAND_BIRMINGHAM_BLACK_COUNTRY}${POSTFIX}`
		),
	],
	[
		"bbc_news_Coventry_Warwickshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_COVENTRY_WARWICKSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Hereford_Worcester",
		returnBasicCreator(`${BASE_URL}${ENGLAND_HEREFORN_WORCESTER}${POSTFIX}`),
	],
	[
		"bbc_news_Shropshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_SHROPSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Stoke_Staffordshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_STOKE_STAFFORDSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Derby",
		returnBasicCreator(`${BASE_URL}${ENGLAND_DERBY}${POSTFIX}`),
	],
	[
		"bbc_news_Leicester",
		returnBasicCreator(`${BASE_URL}${ENGLAND_LEICESTER}${POSTFIX}`),
	],
	[
		"bbc_news_Northampton",
		returnBasicCreator(`${BASE_URL}${ENGLAND_NORTHAMPTON}${POSTFIX}`),
	],
	[
		"bbc_news_Nottingham",
		returnBasicCreator(`${BASE_URL}${ENGLAND_NOTTINGHAM}${POSTFIX}`),
	],
	[
		"bbc_news_Bristol",
		returnBasicCreator(`${BASE_URL}${ENGLAND_BRISTOL}${POSTFIX}`),
	],
	[
		"bbc_news_Cornwall",
		returnBasicCreator(`${BASE_URL}${ENGLAND_CORNWALL}${POSTFIX}`),
	],
	[
		"bbc_news_Devon",
		returnBasicCreator(`${BASE_URL}${ENGLAND_DEVON}${POSTFIX}`),
	],
	[
		"bbc_news_Gloucestershire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_GLOUCESTERSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Somerset",
		returnBasicCreator(`${BASE_URL}${ENGLAND_SOMERSET}${POSTFIX}`),
	],
	[
		"bbc_news_Wiltshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_WILTSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Beds_Herts_",
		returnBasicCreator(`${BASE_URL}${ENGLAND_BEDS_HERTS_BUCKS}${POSTFIX}`),
	],
	[
		"bbc_news_Cambridgeshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_CAMBRIDGESHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Essex",
		returnBasicCreator(`${BASE_URL}${ENGLAND_ESSEX}${POSTFIX}`),
	],
	[
		"bbc_news_Norfolk",
		returnBasicCreator(`${BASE_URL}${ENGLAND_NORFOLK}${POSTFIX}`),
	],
	[
		"bbc_news_Suffolk",
		returnBasicCreator(`${BASE_URL}${ENGLAND_SUFFOLK}${POSTFIX}`),
	],
	[
		"bbc_news_Berkshire",
		returnBasicCreator(`${BASE_URL}${ENGLAND_BERKSHIRE}${POSTFIX}`),
	],
	[
		"bbc_news_Dorset",
		returnBasicCreator(`${BASE_URL}${ENGLAND_DORSET}${POSTFIX}`),
	],
	[
		"bbc_news_Hampshire_IsleWight",
		returnBasicCreator(`${BASE_URL}${ENGLAND_HAMPSHIRE_ISLEWIGHT}${POSTFIX}`),
	],
	[
		"bbc_news_Oxford",
		returnBasicCreator(`${BASE_URL}${ENGLAND_OXFORD}${POSTFIX}`),
	],
	["bbc_news_Kent", returnBasicCreator(`${BASE_URL}${ENGLAND_KENT}${POSTFIX}`)],
	[
		"bbc_news_London",
		returnBasicCreator(`${BASE_URL}${ENGLAND_LONDON}${POSTFIX}`),
	],
	[
		"bbc_news_Surrey",
		returnBasicCreator(`${BASE_URL}${ENGLAND_SURREY}${POSTFIX}`),
	],
	[
		"bbc_news_Sussex",
		returnBasicCreator(`${BASE_URL}${ENGLAND_SUSSEX}${POSTFIX}`),
	],
	[
		"bbc_news_isle_man",
		returnBasicCreator(`${BASE_URL}${ENGLAND_ISLE_MAN}${POSTFIX}`),
	],
	// ["bbc_news_guernsey", returnBasicCreator(`${BASE_URL}${CYMRU}${POSTFIX}`)],
	// ["bbc_news_jersey", returnBasicCreator(`${BASE_URL}${CYMRU}${POSTFIX}`)],
];
