import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { soundCloudConfig } from "./sound-cloud.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const soundCloudOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={soundCloudConfig.scriptSrc} />,
		searchParams,
	};
};
