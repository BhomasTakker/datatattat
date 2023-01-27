import {
	fetchPokemon,
	fetchPokemonInitialState,
} from "@/src/api/pokeapi/pokemon";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PaginationType } from "./types";

const WithQuery = ({ component }: { component: any }) => {
	const [queryState, setQueryState] = useState<PaginationType>(
		fetchPokemonInitialState
	);

	//update query data of id data when pagination changes?
	const { data } = useQuery(
		["fetchPokemon", queryState],
		() => fetchPokemon(queryState),
		{ keepPreviousData: true }
	);

	//loading / error / etc
	if (!data) {
		return <></>;
	}

	console.log({ data });

	const RenderComponent = component;

	//if you have pagination you have to be expecting pagination props - i.e. setPagination
	//We need to be passing props and adding queryState to that
	return (
		<RenderComponent
			queryData={data}
			queryState={queryState}
			onPageUpdate={setQueryState}
			//pass in
			manualPagination={true}
		/>
	);
};

export const withQuery = (Component: any) =>
	function withQueryHOC() {
		return <WithQuery component={Component} />;
	};
