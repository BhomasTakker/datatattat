import { UnknownObject } from "@/src/types";

interface OembedObject {
	searchParams: UnknownObject;
}
export const dailyMotionOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={dailyMotionConfig.scriptSrc} />,
		searchParams,
	};
};
