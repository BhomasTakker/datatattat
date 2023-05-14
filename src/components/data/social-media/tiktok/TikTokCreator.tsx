//You would probably want a different component for
//Tweets and profiles but possibly not profiles and lists
//EXCEPT - think also a drop down to choose profile/list/tweet?

//We know the shape of data
export const TikTokCreator = ({ queryData }: any) => {
	const { html } = queryData;

	console.log(html);

	return (
		<>
			<h1>TikTok Creator</h1>
			<div
				style={{ width: "100%" }}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</>
	);
};
