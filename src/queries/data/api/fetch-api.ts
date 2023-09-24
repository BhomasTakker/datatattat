export const fetchAPI = async (endpoint: string, options: RequestInit) => {
	const response = await fetch(endpoint, options);
	return await response.json();
};
