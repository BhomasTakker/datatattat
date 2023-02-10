import { NextApiRequest, NextApiResponse } from "next";
import { Auth } from "@/models/Auth";
import { withApiAuthentication } from "@/src/api/auth/WithAPIAuthentication";
import { hashPassword, verifyPassword } from "@/lib/auth";
import mongooseConnect from "@/lib/mongoose-connection";
import { User } from "@/models/User";

async function deleteUserAPI(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "DELETE") {
		return;
	}

	const data = req.body;
	const { email, password } = data;
	//We need to validate the input properly / create seperate auth validation so we can easily update
	//check password for characters etc
	//outsource validation / could look into creating decorators or a lib
	if (
		!email ||
		!email.includes("@") ||
		!email.includes(".") ||
		password.trim().length < 7
	) {
		res.json({ message: "There was a problem with the details provided" });
		return;
	}

	await mongooseConnect();

	// const session = await getServerSession(req, res, authOptions);

	// const userEmail = session!.user?.email;
	// const  = req.body.oldPassword;

	//type!!
	const auth = await Auth.findOne({ email });
	const user = await User.findById(auth.userId);
	//list of erros/response messages in a central place
	if (!auth || !user) {
		//should seperate
		res.status(404).json({ message: "User not found." });
		return;
	}
	const arePasswordsEqual = await verifyPassword(password, auth.password);
	if (!arePasswordsEqual) {
		//should be notifying if password incorrect
		res.status(403).json({ message: "Something went wrong" });
		return;
	}

	//if one fails?
	await Auth.deleteOne({ email: auth.email });
	await User.deleteOne({ _id: auth.userId });

	res.status(200).json({ message: "User deleted!" });
}

export default withApiAuthentication(deleteUserAPI);
