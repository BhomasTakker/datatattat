//Get from same file - barren export
import { BING_NEWS_ROOT } from "./bing/news/config";
import { DATA_POLICE_UK } from "./data/gov/uk/police/crime/config";
import { FOOTBALL_DATA_ORG } from "./data/sport/football/football-data.org/config";

// export const API_CONFIG_LIST: any = {
// 	//need groups / here or prior to this set news / radio / etc
// 	bing: BING_NEWS_ROOT,
// };

// @ts-ignore / why!!??
export const API_CONFIG_LIST: Map<string, object> = new Map([
	//need groups / here or prior to this set news / radio / etc
	["bing", BING_NEWS_ROOT],
	["football-data-org", FOOTBALL_DATA_ORG],
	["police-crime-uk", DATA_POLICE_UK],
]);
