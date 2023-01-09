import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Email",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const client = await connectToDatabase();
				const usersCollection = client.db().collection("users");
				const user = await usersCollection.findOne({
					email: credentials!.email,
				});

				if (!user) {
					client.close();
					throw new Error("No user found with that email");
				}

				const isValid = await verifyPassword(
					credentials!.password,
					user.password
				);

				if (!isValid) {
					client.close();
					throw new Error("Could not log you in");
				}

				client.close();
				//return user data here (creates json web token)
				return {
					email: user.email,
					id: user._id.toString(),
				};
			},
		}),
	],
};

export default NextAuth(authOptions);
