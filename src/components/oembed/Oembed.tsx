import { setDangerously } from "@/src/utils/react/set-dangerously";

///////////////////////////////////////////
// All oembeds are going though iframely
// Maybe change this in due course?
// but surely right for now
///////////////////////////////////////

//We know the shape of data
export const Oembed = ({ queryData }: any) => {
	const { html } = queryData;

	console.log({ html });
	console.log({ queryData });

	return (
		<>
			{/* We need a title and description etc - should wrap all in deets? */}
			{/* <h1>TikTok Video</h1> */}
			<div
				style={{ width: "100%" }}
				// setDangerously(html)
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</>
	);
};
