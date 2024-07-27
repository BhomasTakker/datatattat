import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { mixCloudConfig } from "./mix-cloud.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const mixCloudOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={mixCloudConfig.scriptSrc} />,
		searchParams,
	};
};
