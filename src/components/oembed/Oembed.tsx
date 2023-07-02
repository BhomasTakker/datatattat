import { setDangerously } from "@/src/utils/react/set-dangerously";

//We know the shape of data
export const Oembed = ({ queryData }: any) => {
	const { html } = queryData;

	console.log({ html });
	// const _html = (
	// 	<iframe
	// 		id="ytplayer"
	// 		type="text/html"
	// 		width="640"
	// 		height="360"
	// 		src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
	// 		frameborder="0"
	// 	></iframe>
	// );

	return (
		<>
			{/* We need a title and description etc - should wrap all in deets? */}
			{/* <h1>TikTok Video</h1> */}
			<div
				style={{ width: "100%" }}
				dangerouslySetInnerHTML={setDangerously(html)}
			/>
		</>
	);
};
