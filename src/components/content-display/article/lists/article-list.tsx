interface ArticleListProps {
	data: any; // should be data
	component: string;
	variant: string;
}
// Now need look at Query better
// 100% change queryData to data
// spread props or no?
export const ArticleList = ({ data, component, variant }: ArticleListProps) => {
	// What's the plan?
	// I think just make a basic list?
	// Basic Flexbox / basic flex controls
	// set widths? for components

	// already seems like a massively required change
	// if we are specifying a component
	// then we need to be able to specify props

	// if we are specifying a variant
	// then a variant needs props

	return <>ArticleList</>;
};
