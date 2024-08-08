//https://www.freecodecamp.org/news/how-to-use-feature-toggles-in-next-js-and-react/

import { NextApiRequest, NextApiResponse } from "next/types";

export enum FEATURES {
	membership = "membership-enabled",
	edit = "edit-enabled",
	redis = "redis-caching-enabled",
}

const getFeatures = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json([
		...new Set([
			// Your environment variables are available within the `process.env` object.
			// IMPORTANT! All environment variable values are strings.
			// So we cannot compare them with booleans, numbers and so on.

			process.env.FLAG_MEMBERSHIP_ENABLED === "true" ? FEATURES.membership : "",
			process.env.FLAG_EDIT_ENABLED === "true" ? FEATURES.edit : "",
			process.env.FEATURE_REDIS_CACHING === "true" ? FEATURES.redis : "",
		]),
	]);
};

export default getFeatures;
