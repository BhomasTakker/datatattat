import Head from "next/head";
import { Typography } from "@mui/material";
import React from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import {
	changePassword,
	ChangePasswordData,
} from "@/queries/auth/changePassword";
import { addNotification } from "@/store/notifications/notificationSlice";
import { useAppDispatch } from "@/store/hooks";
import { NOTIFICATIONS } from "@/lib/notifications/notifications";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import mongooseConnect from "@/src/lib/mongoose-connection";
import { User } from "@/models/User";

import { useSession } from "next-auth/react";
import { getMainHeader } from "@/src/headers/get-headers";

function UserProfile({ user }: any) {
	//not sure why thisa is here - probably move into form / is form specific rather than page
	const dispatch = useAppDispatch();
	const { data: session, status } = useSession();
	// const {user, isLoading} = useUser();

	// console.log({ session });

	if (!user) {
		return <div>Loading...</div>;
	}

	const { username } = user;

	//If we pass the function in we can store elsewhere with associated functions
	const changePasswordHandler = async (passwordData: ChangePasswordData) => {
		const result = await changePassword(passwordData);
		if (result.error) {
			//We could just call a disapatchNotification(Notification.changePasswordError) which is way better
			//look into this - it is outside of react
			//At least put the notification objects into a lib so all in one place
			dispatch(addNotification(NOTIFICATIONS.passwordUpdatedError));
			return;
		}
		dispatch(addNotification(NOTIFICATIONS.passwordUpdatedSuccess));
		//clear inputs
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
				<Typography variant="h1">{`@${username} Profile Page`}</Typography>
				<ProfileForm onChangePassword={changePasswordHandler} />
			</main>
		</>
	);
}

type ContextParams = {
	userId: string;
};

export async function getStaticPaths() {
	//
	return {
		paths: [
			{
				params: {
					userId: "Tumus",
				},
			},
		],
		fallback: true,
	};
}

export async function getStaticProps({
	params,
	locale,
}: {
	locale: string;
	params: ContextParams;
}) {
	// call a get user?
	await mongooseConnect();
	const { userId } = params;
	//We may want to strip msome data from here
	//i.e. just send page data
	const user = await User.findOne({ username: userId }).lean();
	const headerData = await getMainHeader();

	console.log({ headerData });

	//We need to trim this data / surely?

	if (!user) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.profile,
				...i18namespace.common,
			])),
			user: JSON.parse(JSON.stringify(user)),
			headerData: [headerData],
		},
	};
}

//We need to decide upon a proper authentication strategy
//What we have works and is simple
//There are almost certainly better ways but for currently statically rendered pages aproach is fine
//https://next-auth.js.org/configuration/nextjs#in-getserversideprops

export default UserProfile;
