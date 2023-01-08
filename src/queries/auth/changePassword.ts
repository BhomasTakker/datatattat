export type ChangePasswordData = {
	oldPassword: string;
	newPassword: string;
};

//Probably create a file of headers, of endpoints, etc, and use constants
export async function changePassword(passwordData: ChangePasswordData) {
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
	return data;
}
