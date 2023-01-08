import Head from "next/head";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { withAuth } from "../../hoc/components/auth/withAuth";
import ProfileForm from "../../components/profile/ProfileForm";
import { json } from "stream/consumers";

type ChangePasswordData = {
	oldPassword: string;
	newPassword: string;
};

function Profile() {
	//If we pass the function in we can store elsewhere with associated functions
	const changePasswordHandler = async (passwordData: ChangePasswordData) => {
		console.log({ passwordData });
		const response = await fetch("/api/user/change-password", {
			method: "PATCH",
			body: JSON.stringify(passwordData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();
		console.log({ data });
	};
	return (
		<>
			<Head>
				{/* This needs storing and doing properly */}
				<title>Bad Dog Digital</title>
				<meta name="description" content="First rendition" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Typography variant="h1">User Profile Page</Typography>
				<ProfileForm onChangePassword={changePasswordHandler} />
			</main>
		</>
	);
}

//We need to decide upon a proper authentication strategy
//What we have works and is simple
//There are almost certainly better ways but for currently statically rendered pages aproach is fine
//https://next-auth.js.org/configuration/nextjs#in-getserversideprops

export default withAuth(Profile);
