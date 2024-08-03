import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { youTubeConfig } from "./youtube-config";

interface OembedObject {
	searchParams: UnknownObject;
}
//"<iframe width="200" height="150" src="https://www.youtube.com/embed/wsdy_rct6uo?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Spin Doctors - Two Princes"></iframe>"
export const youTubeOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={youTubeConfig.scriptSrc} />,
		searchParams,
	};
};
