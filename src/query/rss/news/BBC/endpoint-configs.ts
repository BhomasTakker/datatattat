import {
	createBasicEndpoint,
	createSelectEndpoint,
} from "../../utils/endpoints";
import {
	BBC_EAST_ENG_ENDPOINTS,
	BBC_EAST_MIDS_ENDPOINTS,
	BBC_ENGLAND_ENDPOINTS,
	BBC_ISLE_OF_MAN_CHANNEL_ISLANDS_ENDPOINTS,
	BBC_LDN_SOUTH_EAST_ENDPOINTS,
	BBC_NORTHERN_IRELAND_ENDPOINTS,
	BBC_NORTH_EAST_ENG_ENDPOINTS,
	BBC_NORTH_WEST_ENG_ENDPOINTS,
	BBC_SCOTLAND_ENDPOINTS,
	BBC_SOUTH_ENG_ENDPOINTS,
	BBC_UK_ENDPOINTS,
	BBC_WALES_ENDPOINTS,
	BBC_WEST_MIDS_ENDPOINTS,
	BBC_WEST_SOUTH_WEST_ENG_ENDPOINTS,
	BBC_WORLD_ENDPOINTS,
	BBC_YORKSHIRE_LINCOLNSHIRE_ENDPOINTS,
} from "./endpoints";

const WORLD_ENDPOINT_OBJECTS = {
	Headlines: createBasicEndpoint({ id: "bbc_news_world_headlines" }),
	Africa: createBasicEndpoint({ id: "bbc_news_africa" }),
	Asia: createBasicEndpoint({ id: "bbc_news_asia" }),
	Australia: createBasicEndpoint({ id: "bbc_news_australia" }),
	China: createBasicEndpoint({ id: "bbc_news_china" }),
	Europe: createBasicEndpoint({ id: "bbc_news_europe" }),
	India: createBasicEndpoint({ id: "bbc_news_india" }),
	["Latin America"]: createBasicEndpoint({ id: "bbc_news_latin_america" }),
	["Middle East"]: createBasicEndpoint({ id: "bbc_news_middle_east" }),
	["US & Canada"]: createBasicEndpoint({ id: "bbc_news_us_canada" }),
};

const BBC_NORTH_WEST_ENG_ENDPOINT_OBJECTS = {
	Cumbria: createBasicEndpoint({ id: "bbc_news_Cumbria" }),
	Lancashire: createBasicEndpoint({ id: "bbc_news_Lancashire" }),
	Liverpool: createBasicEndpoint({ id: "bbc_news_Liverpool" }),
	Manchester: createBasicEndpoint({ id: "bbc_news_Manchester" }),
};
const BBC_NORTH_EAST_ENG_ENDPOINT_OBJECTS = {
	Tees: createBasicEndpoint({ id: "bbc_news_Tees" }),
	["Tyne & Wear"]: createBasicEndpoint({ id: "bbc_news_tyne_wear" }),
};
const BBC_YORKSHIRE_LINCOLNSHIRE_OBJECTS = {
	Humberside: createBasicEndpoint({ id: "bbc_news_humberside" }),
	["Leeds & West Yorkshire"]: createBasicEndpoint({
		id: "bbc_news_Leeds_Yorkshire_west",
	}),
	Lincolnshire: createBasicEndpoint({ id: "bbc_news_Lincolnshire" }),
	["Sheffield & South Yorkshire"]: createBasicEndpoint({
		id: "bbc_news_Sheffield_yorkshire_south",
	}),
	["York & North Yorkshire"]: createBasicEndpoint({
		id: "bbc_news_York_yorkshire_north",
	}),
};
const BBC_WEST_MIDS_ENDPOINT_OBJECTS = {
	["Birmingham & Black Country"]: createBasicEndpoint({
		id: "bbc_news_Birmingham_black_country",
	}),
	["Coventry & Warwickshire"]: createBasicEndpoint({
		id: "bbc_news_Coventry_Warwickshire",
	}),
	["Hereford & Worcester"]: createBasicEndpoint({
		id: "bbc_news_Hereford_Worcester",
	}),
	Shropshire: createBasicEndpoint({ id: "bbc_news_Shropshire" }),
	["Stoke & Staffordshire"]: createBasicEndpoint({
		id: "bbc_news_Stoke_Staffordshire",
	}),
};
const BBC_EAST_MIDS_ENDPOINT_OBJECTS = {
	Derby: createBasicEndpoint({ id: "bbc_news_Derby" }),
	Leicester: createBasicEndpoint({ id: "bbc_news_Leicester" }),
	Northampton: createBasicEndpoint({ id: "bbc_news_Northampton" }),
	Nottingham: createBasicEndpoint({ id: "bbc_news_Nottingham" }),
};
const BBC_WEST_SOUTH_WEST_ENG_ENDPOINT_OBJECTS = {
	Bristol: createBasicEndpoint({ id: "bbc_news_Bristol" }),
	Cornwall: createBasicEndpoint({ id: "bbc_news_Cornwall" }),
	Devon: createBasicEndpoint({ id: "bbc_news_Devon" }),
	Gloucestershire: createBasicEndpoint({ id: "bbc_news_Gloucestershire" }),
	Somerset: createBasicEndpoint({ id: "bbc_news_Somerset" }),
	Wiltshire: createBasicEndpoint({ id: "bbc_news_Wiltshire" }),
};
const BBC_EAST_ENG_ENDPOINT_OBJECTS = {
	["Beds, Herts & Bucks"]: createBasicEndpoint({ id: "bbc_news_Beds_Herts_" }),
	Cambridgeshire: createBasicEndpoint({ id: "bbc_news_Cambridgeshire" }),
	Essex: createBasicEndpoint({ id: "bbc_news_Essex" }),
	Norfolk: createBasicEndpoint({ id: "bbc_news_Norfolk" }),
	Suffolk: createBasicEndpoint({ id: "bbc_news_Suffolk" }),
};

const BBC_SOUTH_ENG_ENDPOINT_OBJECTS = {
	Berkshire: createBasicEndpoint({ id: "bbc_news_Berkshire" }),
	Dorset: createBasicEndpoint({ id: "bbc_news_Dorset" }),
	["Hampshire & Isle of Wight"]: createBasicEndpoint({
		id: "bbc_news_Hampshire_IsleWight",
	}),
	Oxford: createBasicEndpoint({ id: "bbc_news_Oxford" }),
};
const BBC_LDN_SOUTH_EAST_ENDPOINT_OBJECTS = {
	Kent: createBasicEndpoint({ id: "bbc_news_Kent" }),
	London: createBasicEndpoint({ id: "bbc_news_London" }),
	Surrey: createBasicEndpoint({ id: "bbc_news_Surrey" }),
	Sussex: createBasicEndpoint({ id: "bbc_news_Sussex" }),
};
const BBC_ISLE_OF_MAN_CHANNEL_ISLANDS_ENDPOINT_OBJECTS = {
	["Isle of Man/Ellan Vannin"]: createBasicEndpoint({
		id: "bbc_news_isle_man",
	}),
	Guernsey: createBasicEndpoint({ id: "bbc_news_Guernsey" }),
	Jersey: createBasicEndpoint({ id: "bbc_news_Jersey" }),
};

const SCOTLAND_ENDPOINT_OBJECTS = {
	Headlines: createBasicEndpoint({ id: "bbc_news_scotland_headlines" }),
	Politics: createBasicEndpoint({ id: "bbc_news_scotland_politics" }),
	Business: createBasicEndpoint({ id: "bbc_news_scotland_business" }),
	["Edinburgh, Fife & East"]: createBasicEndpoint({
		id: "bbc_news_scotland_edinburgh_fife_east",
	}),
	["Glasgow & West"]: createBasicEndpoint({
		id: "bbc_news_scotland_glasgow_and_west",
	}),
	["Highlands & Islands"]: createBasicEndpoint({
		id: "bbc_news_scotland_highlands_islands",
	}),
	["NE, Orkney & Shetland"]: createBasicEndpoint({
		id: "bbc_news_scotland_ne_orkney_shetland",
	}),
	South: createBasicEndpoint({ id: "bbc_news_scotland_south" }),
	["Tayside & Central"]: createBasicEndpoint({
		id: "bbc_news_scotland_tayside_central",
	}),
	Alba: createBasicEndpoint({ id: "bbc_news_scotland_alba" }),
};

const NORTHERN_IRELAND_ENDPOINT_OBJECTS = {
	Headlines: createBasicEndpoint({ id: "bbc_news_northern_ireland_headlines" }),
	Politics: createBasicEndpoint({ id: "bbc_news_northern_ireland_politics" }),
};

const WALES_ENDPOINT_OBJECTS = {
	Headlines: createBasicEndpoint({ id: "bbc_news_wales_headlines" }),
	Politics: createBasicEndpoint({ id: "bbc_news_wales_politics" }),
	Business: createBasicEndpoint({ id: "bbc_news_wales_business" }),
	["North East"]: createBasicEndpoint({ id: "bbc_news_wales_north_east" }),
	["North West"]: createBasicEndpoint({ id: "bbc_news_wales_north_west" }),
	Mid: createBasicEndpoint({ id: "bbc_news_wales_mid" }),
	["South East"]: createBasicEndpoint({ id: "bbc_news_wales_south_east" }),
	["South West"]: createBasicEndpoint({ id: "bbc_news_wales_south_west" }),
	Cymru: createBasicEndpoint({ id: "bbc_news_wales_cymru" }),
};

const ENGLAND_ENDPOINT_OBJECTS = {
	[`Headlines`]: createBasicEndpoint({ id: "bbc_news_england_headlines" }),
	["North West"]: createSelectEndpoint({
		id: "bbc_news_england_nw",
		label: "Select Region",
		endpoints: BBC_NORTH_WEST_ENG_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_NORTH_WEST_ENG_ENDPOINT_OBJECTS,
	}),
	["North East"]: createSelectEndpoint({
		id: "bbc_news_england_ne",
		label: "Select Region",
		endpoints: BBC_NORTH_EAST_ENG_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_NORTH_EAST_ENG_ENDPOINT_OBJECTS,
	}),
	["Yorkshire & Lincolnshire"]: createSelectEndpoint({
		id: "bbc_news_eng_yorkshire_linc",
		label: "Select Region",
		endpoints: BBC_YORKSHIRE_LINCOLNSHIRE_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_YORKSHIRE_LINCOLNSHIRE_OBJECTS,
	}),
	["East Midlands"]: createSelectEndpoint({
		id: "bbc_news_england_em",
		label: "Select Region",
		endpoints: BBC_EAST_MIDS_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_EAST_MIDS_ENDPOINT_OBJECTS,
	}),
	["West Midlands"]: createSelectEndpoint({
		id: "bbc_news_england_wm",
		label: "Select Region",
		endpoints: BBC_WEST_MIDS_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_WEST_MIDS_ENDPOINT_OBJECTS,
	}),
	["West & South West"]: createSelectEndpoint({
		id: "bbc_news_england_wsw",
		label: "Select Region",
		endpoints: BBC_WEST_SOUTH_WEST_ENG_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_WEST_SOUTH_WEST_ENG_ENDPOINT_OBJECTS,
	}),
	East: createSelectEndpoint({
		id: "bbc_news_england_east",
		label: "Select Region",
		endpoints: BBC_EAST_ENG_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_EAST_ENG_ENDPOINT_OBJECTS,
	}),
	South: createSelectEndpoint({
		id: "bbc_news_england_south",
		label: "Select Region",
		endpoints: BBC_SOUTH_ENG_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_SOUTH_ENG_ENDPOINT_OBJECTS,
	}),
	["London & South East"]: createSelectEndpoint({
		id: "bbc_news_england_ldn_se",
		label: "Select Region",
		endpoints: BBC_LDN_SOUTH_EAST_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_LDN_SOUTH_EAST_ENDPOINT_OBJECTS,
	}),
	["Isle of Man & Channel Islands"]: createSelectEndpoint({
		id: "bbc_news_england_isle_man_channel",
		label: "Select Region",
		endpoints: BBC_ISLE_OF_MAN_CHANNEL_ISLANDS_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: BBC_ISLE_OF_MAN_CHANNEL_ISLANDS_ENDPOINT_OBJECTS,
	}),
};

const UK_ENDPOINT_OBJECTS = {
	[`Headlines`]: createBasicEndpoint({ id: "bbc_news_uk_headlines" }),
	England: createSelectEndpoint({
		id: "bbc_news_england",
		label: "Select Region",
		endpoints: BBC_ENGLAND_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: ENGLAND_ENDPOINT_OBJECTS,
	}),
	["N. Ireland"]: createSelectEndpoint({
		id: "bbc_news_nortern_ireland",
		label: "Select Region",
		endpoints: BBC_NORTHERN_IRELAND_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: NORTHERN_IRELAND_ENDPOINT_OBJECTS,
	}),
	Scotland: createSelectEndpoint({
		id: "bbc_news_scotland",
		label: "Select Region",
		endpoints: BBC_SCOTLAND_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: SCOTLAND_ENDPOINT_OBJECTS,
	}),
	Alba: createBasicEndpoint({ id: "bbc_news_alba" }),
	Wales: createSelectEndpoint({
		id: "bbc_news_wales",
		label: "Select Region",
		endpoints: BBC_WALES_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: WALES_ENDPOINT_OBJECTS,
	}),
	Cymru: createBasicEndpoint({ id: "bbc_news_cymru" }),
	["Isle of Man"]: createBasicEndpoint({ id: "bbc_news_isle_of_man" }),
	Guernsey: createBasicEndpoint({ id: "bbc_news_guernsey" }),
	Jersey: createBasicEndpoint({ id: "bbc_news_jersey" }),
};

export const BBC_MAIN_ENDPOINT_OBJECTS = {
	["Top Stories"]: createBasicEndpoint({ id: "bbc_news_top_stories" }),
	["War In Ukraine"]: createBasicEndpoint({ id: "bbc_news_ukraine_war" }),
	Climate: createBasicEndpoint({ id: "bbc_news_climate" }),
	UK: createSelectEndpoint({
		id: "bbc_news_uk",
		label: "Select UK Endpoint",
		endpoints: BBC_UK_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: UK_ENDPOINT_OBJECTS,
	}),
	World: createSelectEndpoint({
		id: "bbc_news_world",
		label: "Select World Endpoint",
		endpoints: BBC_WORLD_ENDPOINTS,
		defaultEndpoint: "Headlines",
		endpointObjects: WORLD_ENDPOINT_OBJECTS,
	}),
	Business: createBasicEndpoint({ id: "bbc_news_business" }),
	Politics: createBasicEndpoint({ id: "bbc_news_politics" }),
	Culture: createBasicEndpoint({ id: "bbc_news_culture" }),
	Tech: createBasicEndpoint({ id: "bbc_news_tech" }),
	Science: createBasicEndpoint({ id: "bbc_news_science" }),
	Health: createBasicEndpoint({ id: "bbc_news_health" }),
	["Family & Education"]: createBasicEndpoint({
		id: "bbc_news_family_education",
	}),
	["In Pictures"]: createBasicEndpoint({ id: "bbc_news_in_pictures" }),
	Newsbeat: createBasicEndpoint({ id: "bbc_news_newsbeat" }),
	["BBC Verify"]: createBasicEndpoint({ id: "bbc_news_verify" }),
	Disability: createBasicEndpoint({ id: "bbc_news_disability" }),
};
