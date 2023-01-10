//if this is experimental / we sgould create a new export to limit actual use / future change
import { unstable_getServerSession as getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { withApiAuthentication } from "../../../api/auth/WithAPIAuthentication";
import mongooseConnect from "../../../lib/mongoose-connection";
import User from "../../../../models/User";

//TODO - look into the below as a possible solution - good to play around regardless
//just musing here , and it might be my lack of understanding of what RxJS does
//but we could use the sequence building functionality of RxJS to build queries out of component parts?
//get user or error / pass user / get password / check password or error

//ultimately get data / perform modifications to return / return finished or error

async function changePassword(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "PATCH") {
		return;
	}
	await mongooseConnect();

	// return;

	//this could be decorator / higher order
	const session = await getServerSession(req, res, authOptions);

	const userEmail = session!.user?.email;
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;

	const user = await User.findOne({ email: userEmail });
	console.log({ user });
	//list of erros/response messages in a central place
	if (!user) {
		res.status(404).json({ message: "User not found." });
		return;
	}

	const currenPassword = user.password;

	const arePasswordsEqual = await verifyPassword(oldPassword, currenPassword);
	if (!arePasswordsEqual) {
		//should be notifying if password incorrect
		res.status(403).json({ message: "Something went wrong" });
		return;
	}

	const hashedPassword = await hashPassword(newPassword);

	user.password = hashedPassword;
	await user.save();

	res.status(200).json({ message: "Password updated!" });
	//flash a message on success
}

export default withApiAuthentication(changePassword);
