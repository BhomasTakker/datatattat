import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { blueskyConfig } from "./bluesky.config";

interface OembedObject {
	searchParams: UnknownObject;
}

export const blueskyOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <Script src={blueskyConfig.scriptSrc} />,
		searchParams,
	};
};
