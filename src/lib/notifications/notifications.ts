//Not really a config but... where to go?

import { notificationTypes } from "../../store/notifications/notificationSlice";

export type NotificationType = {
	id: string;
	message: string;
	type: notificationTypes;
};

export const NOTIFICATIONS = {
	//Auth
	signInSuccess: {
		id: "login-successful",
		message: "log in successful",
		type: notificationTypes.success,
	},
	signUpSuccess: {
		id: "account-creation-successful",
		message: "Account Created. Welcome!",
		type: notificationTypes.success,
	},
	signInError: {
		id: "login-unsuccessful",
		message: "There has been an error logging you in.",
		type: notificationTypes.error,
	},
	signUpError: {
		id: "account-creation-failed",
		message: "Account Creation Failed. ",
		type: notificationTypes.error,
	},
	userLoggedOut: {
		id: "logout-success",
		message: "You have been logged out.",
		type: notificationTypes.success,
	},

	//User
	passwordUpdatedSuccess: {
		id: "change-password-success",
		message: "Password updated!",
		type: notificationTypes.success,
	},
	passwordUpdatedError: {
		id: "change-password-error",
		message: "Error changing password - password not changed",
		type: notificationTypes.error,
	},
};
