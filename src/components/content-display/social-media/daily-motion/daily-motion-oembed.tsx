import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { dailyMotionConfig } from "./daily-motion.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const dailyMotionOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={dailyMotionConfig.scriptSrc} />,
		searchParams,
	};
};
