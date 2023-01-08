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
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				// You need to provide your own logic here that takes the credentials
				// submitted and returns either a object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)
				// const res = await fetch("/your/endpoint", {
				//   method: 'POST',
				//   body: JSON.stringify(credentials),
				//   headers: { "Content-Type": "application/json" }
				// })
				// const user = await res.json()

				console.log("What 1 ");

				const client = await connectToDatabase();
				const usersCollection = client.db().collection("users");
				const user = await usersCollection.findOne({
					email: credentials!.email,
				});

				console.log("What 2 ");
				console.log({ user });

				if (!user) {
					client.close();
					throw new Error("No user found with that email");
					return null;
				}

				const isValid = await verifyPassword(
					credentials!.password,
					user.password
				);
				console.log("What 3 " + isValid);
				if (!isValid) {
					client.close();
					throw new Error("Could not log you in");
				}

				client.close();
				console.log("What 4 ");
				console.log({ pword: credentials!.password });
				console.log({ userpword: user.password });
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

// if letting NextAuth deal with it all
//This can do 2 factor, email links, etc
// name: 'Credentials',
// credentials: {
//   username: { label: "Username", type: "text", placeholder: "jsmith" },
//   password: {  label: "Password", type: "password" }
// },
// async authorize(credentials, req) {
// 	const client = await connectToDatabase();
// 	const usersCollection = client.db().collection("users");
// 	const user = await usersCollection.findOne({
// 		email: credentials!.email,
// 	});

// 	if (!user) {
// 		//log / notify, etc
// 		client.close();
// 		throw new Error("No user found!");
// 	}

// 	const isValid = verifyPassword(credentials!.password, user.password);

// 	if (!isValid) {
// 		client.close();
// 		throw new Error("Could not log you in");
// 	}

// 	client.close();

// 	//return user data here (creates json web token)
// 	return {
// 		email: user.email,
// 	};
// },
// }),
