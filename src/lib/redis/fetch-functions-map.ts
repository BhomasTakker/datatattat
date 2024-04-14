import { fetchAPI } from "@/src/queries/data/api/fetch-api";
import { fetchMetaFromHTML } from "@/src/queries/data/meta/fetch-meta";
import { fetchRSS } from "@/src/queries/data/rss/fetch-rss";

type FetchMapOptions =
	| typeof fetchRSS
	| typeof fetchMetaFromHTML
	| typeof fetchAPI;

export const redisFetchMap = new Map<string, FetchMapOptions>([
	["fetch", fetchAPI],
	["fetchRSS", fetchRSS],
	["fetchMeta", fetchMetaFromHTML],
]);
