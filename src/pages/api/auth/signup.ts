import { NextApiRequest, NextApiResponse } from "next";
import { Auth } from "@/models/Auth";
import { hashPassword } from "@/lib/auth";
import mongooseConnect from "@/lib/mongoose-connection";
import { User } from "@/models/User";

export default async function signUpAPI(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return;
	}

	const data = req.body;
	const { email, password, username } = data;
	//We need to validate the input properly / create seperate auth validation so we can easily update
	//check password for characters etc
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

	try {
		const existingAuth = await Auth.findOne({ email });

		if (existingAuth) {
			res.status(422).json({ message: "Email exists" });
			return;
		}
	} catch (err) {
		//this is more of a db failure
		console.log("error finding user");
	}

	//Surely this can be a function
	try {
		const existingUser = await User.findOne({ username });

		if (existingUser) {
			res.status(422).json({ message: "Username exists" });
			return;
		}
	} catch (err) {
		console.log("error checking user");
	}

	const hashedPassword = await hashPassword(password);

	const newUser = new User({
		username,
	});

	let userId = null;
	try {
		const userResult = await newUser.save();
		userId = userResult._id;
	} catch (error) {
		res.status(500).json({ message: "Problem creating user" });
	}

	// console.log({ newUserId: newUser._id });
	// console.log({ userId });

	//if no userId / respond and jump

	const newAuth = new Auth({
		email,
		password: hashedPassword,
		userId,
	});
	try {
		const result = await newAuth.save();
	} catch (error) {
		res.status(500).json({ message: "Problem creating user authentication" });
	}

	res.status(201).json({
		message: "Created user and auth successfully.",
	});
}
