import Header from "@/models/Header";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthentication } from "@/src/api/auth/WithAPIAuthentication";
import { User } from "@/models/User";
import { Auth } from "@/models/Auth";
import { Session } from "next-auth";

async function saveHeaderAPI(
	req: NextApiRequest,
	res: NextApiResponse,
	session: Session
) {
	if (req.method !== "POST") {
		//You could call a function on if GET, POST, PATCH, etc, and just use the same endpoint
		// return; //return error
	}
	await mongooseConnect();

	const { body } = req;
	const { route, creator, nav } = body;
	const { user: sessionUser } = session;

	console.log({ session });
	/*session: {
    user: {
      name: undefined,
      email: 'tbakkertac@hotmail.com',
      image: undefined
    },
    expires: '2023-04-02T14:44:53.322Z'
  }*/

	/////////////////////////////////////////////////
	//functionalise but there has to be a better way
	//i.e. checkUserUsername
	//Need get user back from session
	//user doesn't have an email associated with it
	//returns the wrong user if undefined... :o
	const authUser = await Auth.findOne({ email: sessionUser?.email });
	const { userId } = authUser;
	const user = await User.findById(userId);

	const { username, role = "standard" } = user;
	// const splitRoute = route.split("/").filter(Boolean);

	//////////////////////////////////////

	//Do something properly here / i.e. remove /users from the string and then check
	// username index === 0
	// if (splitRoute[0] !== "users" || splitRoute[1] !== username) {
	// 	return res.status(400).json({ msg: "Nefarious operation" });
	// }
	//dirty check
	if (role !== "admin") {
		const usernameIndex = route.indexOf(`/users/${username}`);
		if (usernameIndex !== 0) {
			return res.status(400).json({ msg: "Nefarious operation" });
		}
	}

	///**********************************************/
	//if admin need check save route against allowed

	//////////////////////////////

	//Update if exists create if not
	const header = await Header.findOneAndUpdate(
		{ route }, // find
		{ ...body }, // update
		{
			// options
			new: true,
			upsert: true, // Make this update into an upsert
		}
	);

	console.log({ saveHeader: header });

	//should return header? - 201 is technically 'created'
	res.status(201).json({ msg: "Header saved" });
}

export default withApiAuthentication(saveHeaderAPI);
