import { Auth } from "@/models/Auth";
import { User } from "@/models/User";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";

//by getUser email
export default async function getUser(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		// return; //return error
	}

	await mongooseConnect();

	const { query } = req;
	const { email } = query;

	//try catch
	const auth = await Auth.findOne({ email });
	const user = await User.findById(auth.userId).lean();

	res.status(200).json(JSON.parse(JSON.stringify(user)));
}
