import { PaginationType } from "@/src/components/data/tables/types";

//Way slower than pokeapi

//not sure how we would manage no pageSize option ?
export const fetchCharacters = async ({
	pageIndex,
	pageSize,
}: PaginationType) => {
	const response = await fetch(
		`https://swapi.dev/api/people?page=${pageIndex + 1}`
	);

	const result = await response.json();

	//how to return data?
	//We need to be uniform no?
	return {
		data: result.results,
		pageCount: Math.ceil(result.count / pageSize),
	};
};
