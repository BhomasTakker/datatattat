import Page from "@/models/Page";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getHomePage(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		// return; //return error
	}
	await mongooseConnect();

	//try catch
	const page = await Page.findOne({ route: "/" }).lean();

	// console.log({ page });
	const pageData = {
		page: page,
		msg: page ? "ok" : "Page not found",
	};
	res.status(200).json(JSON.parse(JSON.stringify(pageData)));
}
