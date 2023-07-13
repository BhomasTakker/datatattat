// Need add more according to componentProps

export const Iframely = ({ queryData }: any) => {
	const { html } = queryData;

	if (!html) {
		// content error
		return <div>Error Happened</div>;
	}

	return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};
