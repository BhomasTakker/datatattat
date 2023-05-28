import Info from "@/models/Info";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

//helpers
const getEndpoint = (route: string | string[]): string => {
	if (typeof route === "string") return route;

	if (Array.isArray(route) && route.length > 0) {
		return route.pop() || "";
	}

	return "";
};

//by getUser email
export default async function getInfo(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		// return; //return error
	}

	await mongooseConnect();

	const { query } = req;
	const { id = "" } = query; //as routeId
	const endpoint = getEndpoint(id);

	//This data should be in Redis no?
	//We don't want th sweaty public coming to our dbs all willy nilly
	//try catch
	const info = await Info.findOne({ name: endpoint }).lean();

	//utils for parsify
	res.status(200).json(JSON.parse(JSON.stringify(info)));
}
