// https://www.npmjs.com/package/rss-parser
import Parser from "rss-parser";

interface Options {
	headers: Headers;
}

/** Fetch RSS data from src via rss-parser */
export const fetchRSS = async (endpoint: string, options: RequestInit) => {
	const { headers } = options;
	// You can actually pass in an array of [currentId, newId] to rename fields
	const parser = new Parser({
		timeout: 1000,
		// headers,
	});
	return await parser.parseURL(endpoint.toString());
};
