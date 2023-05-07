import Page from "@/models/Page";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

//If we delete this file would [...route] pick it up?
//Perhaps no but an index would

export default async function getHomePage(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		// return; //return error
	}
	await mongooseConnect();

	const { query } = req;
	const { pageId } = query; //should be pageid

	console.log("GET PAGE");
	console.log({ pageId });
	//File isn't actually ised anywhere - i.e. we don't get page by id
	//Gets called accidentally if no actual route provided...
	//So api/page/route equates as api/page/index ....
	//this is accidntally get homepage lol

	//try catch
	const page = pageId ? await Page.findById(pageId).lean() : null;

	const pageData = {
		page: page,
		msg: page ? "ok" : "Page not found",
	};
	res.status(200).json(JSON.parse(JSON.stringify(pageData)));
}
