import { ERRORS } from "@/lib/errors/error-messages";

export async function deleteUser(email: string, password: string) {
	let response;

	response = await fetch("/api/auth/delete-user", {
		method: "DELETE",
		body: JSON.stringify({ email, password }),
		//create somne standard headers
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		//this error isn't handled... (which means the others aren't either)
		throw new Error(data.message || ERRORS.deleteUser);
	}
	return data;
}
