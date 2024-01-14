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
	//This all seems like a hack / certainly feels like this shouldn't be like this!!
	const endpoint = new URL(`https://${url}`); //url

	for (let param in searchParams) {
		endpoint.searchParams.set(param, searchParams[param]);
	}

	//try catch
	//absolute path should not be required
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_PATH}/${url}${endpoint.search}`
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	const result = await response.json();

	// we do not want to this here
	return returnFn(result);
};
