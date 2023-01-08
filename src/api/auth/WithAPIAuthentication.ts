//if this is experimental / we sgould create a new export to limit actual use / future change
import { unstable_getServerSession as getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export function withApiAuthentication(func: Function): Function | void {
	return async function (req: NextApiRequest, res: NextApiResponse) {
		const session = await getServerSession(req, res, authOptions);
		if (!session) {
			res.status(401).json({ message: "You must be logged in." });
			return;
		}
		return func(req, res);
	};
}
