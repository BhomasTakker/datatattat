import { getMainHeader, getSubHeaders } from "@/src/headers/get-headers";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getHeaders(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		//You could call a function on if GET, POST, PATCH, etc, and just use the same endpoint
		// return; //return error
	}
	await mongooseConnect();

	const header = await getMainHeader();

	res.status(200).json(JSON.parse(JSON.stringify([header])));
}
