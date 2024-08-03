import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { tikTokConfig } from "./tiktok.config";

interface OembedObject {
	searchParams: UnknownObject;
}

///////////////////////////////
// Perhaps do separately as an embed or something
// for videos tiktok also has
// <iframe src="https://www.tiktok.com/player/v1/6718335390845095173?controls=1"></iframe>
// you can embed the player with any video

export const tikTokOembedObject = ({ searchParams }: OembedObject) => {
	return {
		// <script async src='https://www.tiktok.com/embed.js'></script>
		script: () => <Script src={tikTokConfig.scriptSrc} />,
		searchParams,
	};
};
