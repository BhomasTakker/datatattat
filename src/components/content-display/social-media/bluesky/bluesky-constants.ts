// take from config

import { BlueskyEmbedType } from "./bluesky.edit.config";

// and and these files to x folder
const BASE_URL = "https://embed.bsky.app/oembed";
const ROOT = "https://bsky.app/";

const datatattatBluesky = "datatattat.bsky.social";
const datatattatBlueskyPost = "dunno man post something";

// maxwidth - is between 220 and 600
// <blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:lzlqyldh7nfc34pfffvd24ko/app.bsky.feed.post/3kxq4zqsh572j" data-bluesky-cid="bafyreiaq6ng7kmjrd3ucbqkuxk4pqxzty2ywpfnw33ajlf2py6535wck3y"><p lang="en">Hulk Hogan is damn fink www.wrestlinginc.com/1062201/how-...<br><br><a href="https://bsky.app/profile/did:plc:lzlqyldh7nfc34pfffvd24ko/post/3kxq4zqsh572j?ref_src=embed">[image or embed]</a></p>&mdash; Adam Serwer (<a href="https://bsky.app/profile/did:plc:lzlqyldh7nfc34pfffvd24ko?ref_src=embed">@adamserwer.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:lzlqyldh7nfc34pfffvd24ko/post/3kxq4zqsh572j?ref_src=embed">Jul 20, 2024 at 18:00</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
export const BLUESKY_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, profile, post } = quearyData;
	let url = "";

	const bskyProfile = `${profile}.bsky.social`;

	switch (embedType) {
		case BlueskyEmbedType.post:
			url = `${ROOT}profile/${bskyProfile}/post/${post}`;
			break;
		default:
			url = `${ROOT}profile/${datatattatBluesky}/post/${datatattatBlueskyPost}`;
	}

	const returnParams = {
		url,
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const BLUESKY_OEMBED_MAP = new Map([
	["blueskyRoot", BLUESKY_ROOT_OEMBED_CREATOR],
]);
