const ArticleList = ({ queryData }: { queryData: any }) => {
	// Now need look at Query better
	console.log("FEATURE:001", "ARTICLE:LIST", { queryData });
	return <>ArticleList</>;
};

export const COMPONENTS_MAP = new Map([
	["ArticleList", ArticleList],
	["simplelist", ArticleList],
]);
