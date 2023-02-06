export type ClientSideFetchType = {
	url: string;
	searchParams?: any;
	returnFn?: (data: unknown) => unknown;
	options?: RequestInit; //type
};

const defaultReturn = (data: unknown) => data;
//pass url

//construct the query
//send to backend
//which will forward it with the correct headers
export const clientsideFetch = async ({
	url,
	searchParams = {},
	returnFn = defaultReturn,
	options = {}, //perhaps options_id
}: ClientSideFetchType) => {
	//This all seems like a hack
	const endpoint = new URL(`https://${url}`); //url

	for (let param in searchParams) {
		endpoint.searchParams.set(param, searchParams[param]);
	}

	// console.log({ searchParams: searchParams });
	// console.log({ params: endpoint.search });

	//try catch
	const response = await fetch(`${url}${endpoint.search}`);
	const result = await response.json();

	// console.log({ result });

	return returnFn(result);
};
