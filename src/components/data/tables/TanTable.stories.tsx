import { TanTable } from "./TanTable";
import { withQuery } from "@/hoc/query/withQuery";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchPokemon } from "@/src/api/pokeapi/pokemon";

//Create a Controller
const queryClient = new QueryClient();

export default {
	title: "Components/content/test/TanTable",
	component: TanTable,
};

const componentObject = {
	component: TanTable,
	props: {
		showHeader: true,
		showFooter: true,
		manualPagination: true,
		showColumnToggles: true,
		showColumnFilters: true,
		showPagination: true,
		canSort: true,
	},
};

const queryObject = {
	queryFn: fetchPokemon,
	queryId: "fetchPokemon",
	//this is seperate to pagination state but includes
	state: {
		pageIndex: 0,
		pageSize: 20,
	},
	options: {
		keepPreviousData: true,
	},
};

//pass componentObject? {component, componentProps}
//Query Object {Query, queryId, queryState}
const El = withQuery(componentObject, queryObject);

export const Display = () => (
	<QueryClientProvider client={queryClient}>
		<El />
	</QueryClientProvider>
);
