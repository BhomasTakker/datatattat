// take from config

import {
	BASE_URL,
	ROOT,
	fallbackVideo,
	YouTubeEmbedType,
} from "./youtube-config";

const datatattatYouTubePost = "dunno man post something";

// maxwidth - is between 220 and 600
// <blockquote class="youTube-embed" data-youTube-uri="at://did:plc:lzlqyldh7nfc34pfffvd24ko/app.bsky.feed.post/3kxq4zqsh572j" data-youTube-cid="bafyreiaq6ng7kmjrd3ucbqkuxk4pqxzty2ywpfnw33ajlf2py6535wck3y"><p lang="en">Hulk Hogan is damn fink www.wrestlinginc.com/1062201/how-...<br><br><a href="https://bsky.app/profile/did:plc:lzlqyldh7nfc34pfffvd24ko/post/3kxq4zqsh572j?ref_src=embed">[image or embed]</a></p>&mdash; Adam Serwer (<a href="https://bsky.app/profile/did:plc:lzlqyldh7nfc34pfffvd24ko?ref_src=embed">@adamserwer.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:lzlqyldh7nfc34pfffvd24ko/post/3kxq4zqsh572j?ref_src=embed">Jul 20, 2024 at 18:00</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
export const YOUTUBE_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, video, list, short } = quearyData;
	let url;
	let returnParams = {};

	/////////////////////////////////////////////////////////////////////
	// I think we always have to pass in a max, min , width, and height
	/////////////////////////////////////////////////////////////////////
	const maxwidth = 800;
	const maxheight = 600;
	/////////////////////////////////////////////////////////////////////
	// params on the inner url are getting treated as though tey are of the first
	// We must treat separately
	switch (embedType) {
		case YouTubeEmbedType.video:
			url = new URL(`${ROOT}watch`);
			url.searchParams.set("v", video);
			returnParams = {
				url: url.toString(),
				maxwidth,
				maxheight,
			};
			break;
		case YouTubeEmbedType.list:
			url = new URL(`${ROOT}playlist`);
			url.searchParams.set("list", list);
			returnParams = {
				url: url.toString(),
				maxwidth,
				maxheight,
			};
			break;
		case YouTubeEmbedType.short:
			url = new URL(`${ROOT}shorts/${short}`);
			url.searchParams.set("short", short);
			returnParams = {
				url: url.toString(),
				maxwidth,
				maxheight,
			};
			break;
		default:
			url = new URL(`${ROOT}watch`);
			url.searchParams.set("v", fallbackVideo);
			returnParams = {
				url: url.toString(),
				maxwidth,
				maxheight,
			};
	}
	console.log("YOUTUBE", { url, BASE_URL, format: "json", queryParams });

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const YOUTUBE_OEMBED_MAP = new Map([
	["youTubeRoot", YOUTUBE_ROOT_OEMBED_CREATOR],
]);
