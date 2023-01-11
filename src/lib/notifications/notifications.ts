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
		i18n: "login-successful",
		type: notificationTypes.success,
	},
	signUpSuccess: {
		id: "account-creation-successful",
		message: "Account Created. Welcome!",
		i18n: "account-creation-successful",
		type: notificationTypes.success,
	},
	signInError: {
		id: "login-unsuccessful",
		message: "There has been an error logging you in.",
		i18n: "login-unsuccessful",
		type: notificationTypes.error,
	},
	signUpError: {
		id: "account-creation-failed",
		message: "Account Creation Failed. ",
		i18n: "account-creation-failed",
		type: notificationTypes.error,
	},
	userLoggedOut: {
		id: "logout-success",
		message: "You have been logged out.",
		i18n: "logout-success",
		type: notificationTypes.success,
	},

	//User
	passwordUpdatedSuccess: {
		id: "change-password-success",
		message: "Password updated!",
		i18n: "change-password-success",
		type: notificationTypes.success,
	},
	passwordUpdatedError: {
		id: "change-password-error",
		message: "Error changing password - password not changed",
		i18n: "change-password-error",
		type: notificationTypes.error,
	},
};
