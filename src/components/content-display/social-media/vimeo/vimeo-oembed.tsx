import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { vimeoConfig } from "./vimeo.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const vimeoOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={vimeoConfig.scriptSrc} />,
		searchParams,
	};
};
