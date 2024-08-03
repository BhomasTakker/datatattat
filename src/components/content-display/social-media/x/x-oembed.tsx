import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { Xconfig } from "./x.config";

interface OembedObject {
	searchParams: UnknownObject;
}

export const xOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <Script src={Xconfig.scriptSrc} />,
		searchParams,
	};
};
