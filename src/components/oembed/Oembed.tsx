import { setDangerously } from "@/src/utils/react/set-dangerously";

//We know the shape of data
export const Oembed = ({ queryData }: any) => {
	const { html } = queryData;

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
