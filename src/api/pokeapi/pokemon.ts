import { PaginationType } from "@/src/components/data/tables/types";

export const fetchPokemonInitialState = {
	pageIndex: 0,
	pageSize: 20,
};

export const fetchPokemon = async ({ pageIndex, pageSize }: PaginationType) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?offset=${pageIndex}&limit=${pageSize}`
	);

	const result = await response.json();

	//how to return data?
	//We need to be uniform no?
	return {
		data: result.results,
		pageCount: Math.ceil(result.count / pageSize),
	};
};
