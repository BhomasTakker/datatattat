import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useState } from "react";

type ComponentObjectType = {
	component: any; //type
	props: any; //generic
};
type QueryObjectType = {
	queryFn: (params: any) => any; //genric in and out
	queryId: string;
	state: any;
	options: UseQueryOptions<unknown, unknown, unknown, any[]>;
};

type WithQueryParams = {
	componentObject: ComponentObjectType;
	queryObject: QueryObjectType;
};

//Need pass generics for query AND component AND CcomponentProps
const WithQuery = ({ componentObject, queryObject }: WithQueryParams) => {
	const Component = componentObject.component;
	const componentProps = componentObject.props;

	const { queryFn, queryId, state, options } = queryObject;

	//pass generic for state object type
	const [queryState, setQueryState] = useState<unknown>(state);

	console.log({ WITH_query: queryObject });

	//update query data of id data when pagination changes?
	const { data } = useQuery([queryId, queryState], () => queryFn(queryState), {
		...options,

		// force refetch to false until we have chaching properly in place
		refetchInterval: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	// console.log("Redraw Query");

	//loading / error / etc
	if (!data) {
		return <></>;
	}

	console.log({ WITH_data: data });

	//if you have pagination you have to be expecting pagination props - i.e. setPagination
	//We need to be passing props and adding queryState to that
	return (
		<Component
			queryData={data}
			//withPaginatedQuery?
			queryState={queryState}
			onPageUpdate={setQueryState}
			//pass in
			// manualPagination={true}
			{...componentProps}
		/>
	);
};

export const withQuery = (
	componentObject: ComponentObjectType,
	queryObject: QueryObjectType
) =>
	function withQueryHOC() {
		return (
			<WithQuery componentObject={componentObject} queryObject={queryObject} />
		);
	};
