import Page from "@/models/Page";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		// return; //return error
	}
	mongooseConnect();

	const { query } = req;
	const { route } = query; //as routeId
	let routeId;
	if (typeof route === "string") {
		routeId = `/${route}`;
	} else {
		routeId = `/${route?.join("/")}`;
	}

	console.log({ route });
	console.log({ routeId });
	//try catch
	const page = routeId ? await Page.findOne({ route: routeId }).lean() : null;

	console.log({ page });
	const pageData = {
		page: page,
		msg: page ? "ok" : "Page not found",
	};
	res.status(200).json(JSON.parse(JSON.stringify(pageData)));
}
