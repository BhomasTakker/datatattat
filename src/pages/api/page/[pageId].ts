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
	await mongooseConnect();

	const { query } = req;
	const { slug } = query;

	//try catch
	const page = slug ? await Page.findById(slug).lean() : null;

	const pageData = {
		page: page,
		msg: page ? "ok" : "Page not found",
	};
	res.status(200).json(JSON.parse(JSON.stringify(pageData)));
}
