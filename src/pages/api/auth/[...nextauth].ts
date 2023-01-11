import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import type { NextAuthOptions } from "next-auth";
import User from "../../../../models/User";
import { ERRORS } from "../../../lib/errors/error-messages";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		//We want to import this because ultimately we are going to have a number of login/signup strategies
		CredentialsProvider({
			name: "Email",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const user = await User.findOne({ email: credentials!.email });

				if (!user) {
					//would actually go with something like throw createError(error.id)
					throw new Error(ERRORS.noUser);
				}

				const isValid = await verifyPassword(
					credentials!.password,
					user.password
				);

				if (!isValid) {
					throw new Error(ERRORS.invalidPassword);
				}

				return {
					email: user.email,
					id: user._id.toString(),
				};
			},
		}),
	],
};

export default NextAuth(authOptions);
