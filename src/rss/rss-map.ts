import { SKY_NEWS_RSS_CREATOR } from "./news/Sky/constants";

// export type API_REQUEST_TYPE = {
// 	url: string;
// 	headers: object;
// 	returns: Function;
// 	data: any;
// };

// export type QueryCreator = {
// 	url: string;
// 	headers: object;
// 	returns: Function;
// 	queryParams: any;
// };

export const RSS_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["skyNews", SKY_NEWS_RSS_CREATOR],
]);
