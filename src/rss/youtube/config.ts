const BASE_URL = "https://news.google.com/news/rss";
const POSTFIX = "";

enum ENDPOINTS {
	playlist = "playlist",
}

// We need to specify return object
// We need to transduce returns to fit

// Need to update rss-query
// Need api and rss query to be inline and share code as much as possible
const inputObject = {
	type: "select",
	id: "youtube_endpoint",
	label: "Select Endpoint",
	endpoints: ENDPOINTS,
	defaultEndpoint: "playlist",
	baseUrl: BASE_URL, // don't think required
	postfix: "",

	info: "we need a description of what this does",

	params: [],

	endpointObjects: {
		playlist: {
			id: "youtube_playlist",
			label: "Enter Playlist",
			baseUrl: "https://www.youtube.com/feeds/videos.xml?playlist_id=",
			postfix: "",
			type: "text",
			params: [],
		},
	},
};

export const YOUTUBE_RSS_CONFIG_OBJECT = {
	baseUrl: BASE_URL, // don't think used
	// endpoints: ENDPOINTS,
	// defaultEndpoint: ["News"],
	postfix: POSTFIX, // same - don't think a thing

	endpointInput: inputObject,
};
