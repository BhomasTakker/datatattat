const BASE_URL = "https://www.reddit.com/oembed";
const ROOT = "https://www.reddit.com/r/";
const datatattat = "@datatattat";

type RedditOembedProps = {
	post: string;
	group: string;
	embedType: string;
};

export type RedditOembedCreator = {
	quearyData: RedditOembedProps;
};

const REDDIT_ROOT_OEMBED_CREATOR = (queryParams: RedditOembedCreator) => {
	const { quearyData } = queryParams;
	const { group, post, embedType } = quearyData;

	let url = "";

	switch (embedType) {
		case "post":
			url = `${ROOT}${group}/comments/${post}`;
			break;
		default:
			url = `${ROOT}${datatattat}`;
	}

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: { url },
	};
};

export const REDDIT_OEMBED_MAP = new Map([
	["redditRoot", REDDIT_ROOT_OEMBED_CREATOR],
]);
