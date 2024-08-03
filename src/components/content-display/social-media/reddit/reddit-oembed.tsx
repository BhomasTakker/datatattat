import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { redditConfig } from "./reddit.config";

interface OembedObject {
	searchParams: UnknownObject;
}
/* <blockquote class="reddit-embed-bq" style="height:500px" data-embed-height="546"><a href="https://www.reddit.com/r/place/comments/tqbguc/412022/">4/1/2022</a><br> by<a href="https://www.reddit.com/user/kethryvis/">u/kethryvis</a> in<a href="https://www.reddit.com/r/place/">place</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script> */
export const redditOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <Script src={redditConfig.scriptSrc} />,
		searchParams,
	};
};
