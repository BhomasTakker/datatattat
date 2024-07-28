import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { podbeanConfig } from "./podbean.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const podbeanOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={podbeanConfig.scriptSrc} />,
		searchParams,
	};
};
