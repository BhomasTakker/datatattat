//You would probably want a different component for
//Tweets and profiles but possibly not profiles and lists
//EXCEPT - think also a drop down to choose profile/list/tweet?

//We know the shape of data
export const Tweet = ({ queryData }: any) => {
	const { html } = queryData;

	return (
		<>
			<h1>Tweet</h1>
			<div
				style={{ width: "100%" }}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</>
	);
};
