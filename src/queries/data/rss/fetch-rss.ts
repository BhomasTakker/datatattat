import Parser from "rss-parser";

/** Fetch RSS data from src via rss-parser */
export const fetchRSS = async (endpoint: string, options: RequestInit) => {
	const parser = new Parser();
	return await parser.parseURL(endpoint.toString());
};
