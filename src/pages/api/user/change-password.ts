//if this is experimental / we sgould create a new export to limit actual use / future change
import { unstable_getServerSession as getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../lib/db";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { use } from "react";

function withApiAuthentication(func: Function): Function | void {
	return async function (req: NextApiRequest, res: NextApiResponse) {
		const session = await getServerSession(req, res, authOptions);
		if (!session) {
			res.status(401).json({ message: "You must be logged in." });
			return;
		}
		return func(req, res);
	};
}

async function changePassword(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "PATCH") {
		return;
	}

	//this could be decorator / higher order
	const session = await getServerSession(req, res, authOptions);
	// if (!session) {
	// 	res.status(401).json({ message: "You must be logged in." });
	// 	return;
	// }
	// console.log({ session });

	const userEmail = session!.user?.email;
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;

	const client = await connectToDatabase();
	const usersCollection = client.db().collection("users");

	const user = await usersCollection.findOne({ email: userEmail });

	//list of erros/response messages in a central place
	if (!user) {
		res.status(404).json({ message: "User not found." });
		client.close();
		return;
	}

	console.log({ password: user.password });
	const currenPassword = user.password;
	console.log({ oldPassword });
	console.log({ newPassword });
	console.log({ currenPassword });
	const arePasswordsEqual = await verifyPassword(oldPassword, currenPassword);
	if (!arePasswordsEqual) {
		//should be notifying if password incorrect
		res.status(403).json({ message: "Something went wrong" });
		client.close();
		return;
	}
	console.log({ newPassword });
	const hashedPassword = await hashPassword(newPassword);

	//need error handlng all over!
	const result = await usersCollection.updateOne(
		{ email: userEmail },
		{
			$set: {
				password: hashedPassword,
			},
		}
	);
	console.log({ result });
	client.close();
	res.status(200).json({ message: "Password updated!" });
	//flash a message on success
}

//this looks like it works - it's perhaps a  little superfluous in this instance
export default withApiAuthentication(changePassword);
