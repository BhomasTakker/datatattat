import Page from "@/models/Page";
import { User } from "@/models/User";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

//by getUser email
export default async function createNewPage(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		// return; //return error
	}
	const { body } = req;
	const { creator } = body;

	mongooseConnect();

	const user = await User.findById(creator);

	if (!user) {
		//return error
	}

	const page = new Page(body);

	try {
		page.save();
	} catch (err) {
		//Is it a 500 though?
		return res.status(500).json({ message: "Unable to save" });
	}

	try {
		user.page = page._id;
		user.save();
	} catch (error) {
		return res.status(500).json({ message: "Unable to update user home page" });
	}

	res.status(200).json({}); //send page or just status ok?
}
