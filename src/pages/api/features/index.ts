//https://www.freecodecamp.org/news/how-to-use-feature-toggles-in-next-js-and-react/

import { NextApiRequest, NextApiResponse } from "next/types";

const getFeatures = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json([
		...new Set([
			// Your environment variables are available within the `process.env` object.
			// IMPORTANT! All environment variable values are strings.
			// So we cannot compare them with booleans, numbers and so on.

			process.env.FLAG_MEMBERSHIP_ENABLED === "true"
				? "membership-enabled"
				: "",
			process.env.FLAG_EDIT_ENABLED === "true" ? "edit-enabled" : "",
		]),
	]);
};

export default getFeatures;
