import { BASE_URL, ENDPOINTS, HEADERS } from "@/src/api/bing/news/constants";
import { NextApiRequest, NextApiResponse } from "next";

//We should initially form the data into a 'shape' we want?
//We might do further on the client side but we should
//strip away unrequired, or reform for our intented purposes
//We should expect a form back from every request?

const options = HEADERS;

//if we send ids as query parameters and then remove them
//we can specify mapping, filters, and sort, etc
//do that on the server rather than client side
//
//You can easily remove parameters once added to endpoint.searchParams
//with .delete or similar
//if you know there will always be a base-url,
//an endpoint, and an options_id you can ermove after auto adding
//And that will give you a truly dynamic api call

async function search(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;

	const endpoint = new URL(`${BASE_URL}${ENDPOINTS.NEWS_SEARCH}`);
	for (let param in req.query) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	//try catch response
	const response = await fetch(endpoint, options);
	const result = await response.json();

	res.status(200).json(result);
}

export default search;
