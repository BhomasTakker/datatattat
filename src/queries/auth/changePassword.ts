import { ERRORS } from "../../../config/errors/error-messages";

export type ChangePasswordData = {
	oldPassword: string;
	newPassword: string;
};

//Probably create a file of headers, of endpoints, etc, and use constants
export async function changePassword(passwordData: ChangePasswordData) {
	try {
		const response = await fetch("/api/user/change-password", {
			method: "PATCH",
			body: JSON.stringify(passwordData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		//we should seperate responses here?
		//Assume if here password got changed

		const data = await response.json();
		console.log({ data });
		return data;
	} catch (error) {
		//I feel like this is a better aproach?
		return { error: true, msg: ERRORS.updatePassword };
		// throw new Error("Error chnaging user password.");
	}
}
