// We need to go over this
// It needs upgrading at the very least
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
	//This is for modifying the returned data
	returnFn = defaultReturn,
	options = {}, //perhaps options_id
}: ClientSideFetchType) => {
	const endpoint = new URL(`https://${url}`); //url

	for (let param in searchParams) {
		endpoint.searchParams.set(param, searchParams[param]);
	}

	/////////////////////////////
	// NOTE:- The preceading '/'
	// Adding / Omitting has major differences
	// Adding appends to the domain of the url i.e http://datatattat.com
	// Omitting apeends to the CURRENT url i.e. http://datatattat.com/news/uk/api/blah...!
	const path = `/${url}${endpoint.search}`;

	const response = await fetch(path);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	const result = await response.json();

	// we do not want to this here
	return returnFn(result);
};
