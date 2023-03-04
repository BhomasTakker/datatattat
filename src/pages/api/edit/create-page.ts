import { Auth } from "@/models/Auth";
import Page from "@/models/Page";
import { User } from "@/models/User";
import { withApiAuthentication } from "@/src/api/auth/WithAPIAuthentication";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

//by getUser email
async function createNewPage(
	req: NextApiRequest,
	res: NextApiResponse,
	session: Session
) {
	if (req.method !== "POST") {
		// return; //return error
	}
	const { body } = req;
	const { creator, route } = body;
	const { user: sessionUser } = session;

	await mongooseConnect();

	//Add a function in try / a sequence of checks and or actions
	const authUser = await Auth.findOne({ email: sessionUser?.email });
	if (!authUser) {
		return res.status(400).json({ msg: "Critical Error" });
	}

	const { userId } = authUser;

	const user = await User.findById(creator);
	const { username } = user;

	if (!user) {
		return res.status(400).json({ msg: "Incorrect creator" });
	}

	if (user._id.toString() !== userId.toString()) {
		return res.status(400).json({ msg: "Nefarious operation" });
	}

	//////////////////////////////////////
	// const splitRoute = route.split("/").filter(Boolean);
	// const trimmedRoute = route.replace('/users/', '');
	const usernameIndex = route.indexOf(`/users/${username}`);
	if (usernameIndex !== 0) {
		return res.status(400).json({ msg: "Nefarious operation" });
	}

	let page;

	try {
		page = await Page.findOneAndUpdate(
			{ route }, // find
			{ ...body }, // update
			{
				// options
				new: true,
				upsert: true, // Make this update into an upsert
			}
		);
	} catch (error) {
		return res.status(500).json({ msg: "DB error" });
	}

	// const page = new Page(body);

	// try {
	// 	page.save();
	// } catch (err) {
	// 	//Is it a 500 though?
	// 	return res.status(500).json({ message: "Unable to save" });
	// }

	if (!page) {
		return res.status(400).json({ msg: "Unable to save" });
	}

	// try {
	// 	user.page = page._id;
	// 	user.save();
	// } catch (error) {
	// 	return res.status(500).json({ message: "Unable to update user home page" });
	// }

	res.status(201).json({ msg: "Page saved successfully" }); //send page or just status ok?
}

export default withApiAuthentication(createNewPage);
