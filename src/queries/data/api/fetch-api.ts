export const fetchAPI = async (endpoint: string, options: RequestInit) => {
	const response = await fetch(endpoint, options);
	// console.log("WHAAA ", { response });
	// console.log("WHAAA ", { endpoint, options });
	// return response;
	return await response.json();
};
