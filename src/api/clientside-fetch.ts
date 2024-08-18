import { isDevelopment, isProduction } from "../utils/env";

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

	// Looks like this doesn't work on production...
	const isDev = isDevelopment();
	///////////////////////////////////////////////////////////
	// BUG:0000 / fix me
	// I might currently break on production - almost certainly will
	// This cannot be okay / update me / fix me / protect
	//////////////////////////////////////////////////////////
	// For staging - we would need actual url - we can't hard code that
	//////////////////////////////////////////////////////////////
	const path = isDev
		? `${process.env.NEXT_PUBLIC_API_PATH}/${url}${endpoint.search}`
		: `${url}${endpoint.search}`;
	//try catch
	//absolute path should not be required / seemes to work fine?
	// ${process.env.NEXT_PUBLIC_API_PATH}/
	const response = await fetch(path);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	const result = await response.json();

	// we do not want to this here
	return returnFn(result);
};
