import Head from "next/head";
import { Typography } from "@mui/material";
import React from "react";
import { withAuth } from "@/hoc/components/auth/withAuth";
import ProfileForm from "@/components/profile/ProfileForm";
import {
	changePassword,
	ChangePasswordData,
} from "@/queries/auth/changePassword";
import {
	addNotification,
	notificationTypes,
} from "@/store/notifications/notificationSlice";
import { useAppDispatch } from "@/store/hooks";
import { NOTIFICATIONS } from "@/lib/notifications/notifications";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18namespace } from "@/lib/i18n/namespace-sets";
import { DTAHead } from "@/src/head/DTAHead";

function Profile() {
	//not sure why thisa is here - probably move into form / is form specific rather than page
	const dispatch = useAppDispatch();
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
			<DTAHead />
			<main>
				<Typography variant="h1">User Profile Page</Typography>
				<ProfileForm onChangePassword={changePasswordHandler} />
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				i18namespace.profile,
				...i18namespace.common,
			])),
		},
	};
}

//We need to decide upon a proper authentication strategy
//What we have works and is simple
//There are almost certainly better ways but for currently statically rendered pages aproach is fine
//https://next-auth.js.org/configuration/nextjs#in-getserversideprops

export default withAuth(Profile);
