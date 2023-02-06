import { PaginationType } from "@/src/components/data/tables/types";

export const fetchPokemonInitialState = {
	pageIndex: 0,
	pageSize: 10,
};

export const fetchPokemon = async ({ pageIndex, pageSize }: PaginationType) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?offset=${pageIndex}&limit=${pageSize}`
	);

	const result = await response.json();

	//how to return data?
	//We need to be uniform no?
	//do we do expected objects
	//i.e. data, pagination, and meta???
	//everything has data
	//not everything has pagination
	//meta - dunno
	return {
		data: result.results,
		pageCount: Math.ceil(result.count / pageSize),
	};
};
