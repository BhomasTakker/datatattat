import { notificationTypes } from "@/store/notifications/notificationSlice";

//Split up into files and null export pattern
//in slice
// export type NotificationType = {
// 	id: string;
// 	message: string;
// 	type: notificationTypes;
// 	i18n: string;
// };

//How to manage this
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
	accountDeletedSuccess: {
		id: "user-deleted-successful",
		message: "Account Deleted.",
		i18n: "account-deletion-successful",
		type: notificationTypes.success,
	},
	accountDeletedError: {
		id: "user-deleted-unsuccessful",
		message: "There has been an error deleting your account.",
		i18n: "account-deletion-unsuccessful",
		type: notificationTypes.error,
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

	//Page creation
	pageCreationSuccess: {
		id: "create-page-success",
		message: "Page created successfully",
		i18n: "create-page-success",
		type: notificationTypes.success,
	},
	pageCreationError: {
		id: "create-page-error",
		message: "Error creating page - unable to save",
		i18n: "create-page-error",
		type: notificationTypes.error,
	},
	headerSavedSuccess: {
		id: "header-saved-success",
		message: "Header Saved successfully",
		i18n: "header-saved-success",
		type: notificationTypes.success,
	},
	haederSavedError: {
		id: "header-saved-error",
		message: "Error saving header",
		i18n: "save-header-error",
		type: notificationTypes.error,
	},
};
