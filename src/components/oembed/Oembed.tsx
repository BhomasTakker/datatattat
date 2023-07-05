import { setDangerously } from "@/src/utils/react/set-dangerously";
import { useEffect } from "react";
//https://iframely.com/docs/react
///////////////////////////////////////////
// All oembeds are going though iframely
// Maybe change this in due course?
// but surely right for now
///////////////////////////////////////
// const html =
// 	'<div style="max-width: 56vh;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 177.7778%;"><iframe src="https://www.youtube.com/embed/Eh7bFt7oUto" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div></div>';
//We know the shape of data
export const Oembed = ({ queryData }: any) => {
	const { html } = queryData;

	console.log({ html });
	console.log({ queryData });

	// not sure this actually has an effect?
	useEffect(() => {
		window.iframely && window.iframely.load();
	});

	return (
		<>
			{/* We need a title and description etc - should wrap all in deets? */}
			{/* <h1>TikTok Video</h1> */}
			<div
				style={{ width: "100%" }}
				// setDangerously(html)
				// Do we just assume that iframely is safe?
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</>
	);
};
