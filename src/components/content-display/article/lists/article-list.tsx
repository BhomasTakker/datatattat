interface ArticleListProps {
	queryData: any; // should be data
	component: string;
	variant: string;
}

// 100% change queryData to data
export const ArticleList = ({
	queryData,
	component,
	variant,
}: ArticleListProps) => {
	// Now need look at Query better
	console.log("FEATURE:001", "ARTICLE:LIST", { queryData });
	console.log("FEATURE:001", "ARTICLE:LIST", { component });
	console.log("FEATURE:001", "ARTICLE:LIST", { variant });

	return <>ArticleList</>;
};
