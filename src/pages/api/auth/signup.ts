import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

//TODO error functionality
export default async function signUpAPI(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return;
	}

	const data = req.body;
	const { email, password } = data;
	//We need to validate the input properly / create seperate auth validation so we can easily update
	//check password for characters etc
	if (
		!email ||
		!email.includes("@") ||
		!email.includes(".") ||
		password.trim().length < 7
	) {
		//Need do proper responses
		res.json({ message: "There was a problem with the details provided" });
		return;
	}

	//single call
	const client = await connectToDatabase();
	const db = client.db();

	//check existing user
	//create an Auth lib function
	const existingUser = await db.collection("users").findOne({ email });
	if (existingUser) {
		//TODO - useContext for this
		//return error / notification / need use Mui SnackBars
		//Create a layout component and use state to set notification message and severity
		//layout component can display, log, etc
		res.status(422).json({ message: "Email exists" });
		client.close();
		return;
	}

	const hashedPassword = await hashPassword(password);

	//mongoose would be a better step - even if as simple as just user
	//it IS the better aproach
	const result = await db.collection("users").insertOne({
		email,
		password: hashedPassword,
	});

	//automatically log in lol

	client.close();

	res.status(201).json({
		message: "Created user successfully.",
	});
}
