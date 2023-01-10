import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../../models/User";
import { hashPassword } from "../../../lib/auth";

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
		res.json({ message: "There was a problem with the details provided" });
		return;
	}

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		res.status(422).json({ message: "Email exists" });
		return;
	}

	const hashedPassword = await hashPassword(password);

	const newUser = new User({
		email,
		password: hashedPassword,
	});

	try {
		const result = await newUser.save();
	} catch (error) {
		res.status(500).json({ message: "Problem creating user" });
	}

	res.status(201).json({
		message: "Created user successfully.",
	});
}
