import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { rumbleConfig } from "./rumble.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const rumbleOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={rumbleConfig.scriptSrc} />,
		searchParams,
	};
};
