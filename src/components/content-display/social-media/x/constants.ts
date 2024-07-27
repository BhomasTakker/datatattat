// take from config
// and and these files to x folder
const BASE_URL = "https://publish.x.com/oembed";
const ROOT = "https://x.com/";

export const XROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, profile, post, limit, maxwidth, minwidth, theme } =
		quearyData;
	let url = "";
	// check better
	// lists do not work at all - handle/lists/id
	if (embedType === "profile") {
		url = `${ROOT}${profile}`;
	} else if (post) {
		url = `${ROOT}status/${post}`;
	} else {
		// something like this
		url = `${ROOT}${"datatattat"}`;
	}

	const returnParams = {
		url,
		limit,
		maxwidth,
		minwidth,
		theme,
		omit_script: "1",
		dnt: true,
		////////////////////////////////////////////////////////////
		// have been issues for a long time without any word from X
		// lists look like they do not work at all at the moment
		// certain profiles are disordered
		// a post - content flagged nsfw is blocked
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		returns: (data: any) => data, // <- this needs a big work
		queryParams: returnParams,
	};
};

export const X_OEMBED_MAP = new Map([["xRoot", XROOT_OEMBED_CREATOR]]);
