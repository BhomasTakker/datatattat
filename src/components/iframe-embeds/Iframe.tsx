import { IFRAME_EMBED_MAP } from "@/src/iframe-embeds/iframe-map";
import { setDangerously } from "@/src/utils/react/set-dangerously";
//We should probably call this regardless?

export const Iframe = (props: any) => {
	console.log("!!!IFRAME EMBED!!!");
	console.log({ props });

	const {
		iframeDataId,
		id = "ytplayer",
		title = "iframe title",
		type = "text/html",
		width = "640",
		height = "360",
		frameborder = "0",
		params = {},
	} = props;

	const iframeDataFn = IFRAME_EMBED_MAP.get(iframeDataId) as Function;
	const iframeData = iframeDataFn ? iframeDataFn(params) : {};

	console.log("!!!IFRAME EMBED!!!");
	console.log({ props });
	console.log({ iframeData });

	const { url } = iframeData;

	return (
		<>
			<iframe
				id={id}
				title={title}
				// @ts-ignore / is this old/dep or something?
				type={type}
				width={width}
				height={height}
				src={url}
				frameborder={frameborder}
			></iframe>
		</>
	);
};
